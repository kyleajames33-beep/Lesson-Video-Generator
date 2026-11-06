// M8 C08 scenes 1 to 6: the hook (five unlabelled bottles; the candidate strip writes as each compound is named, groups
// ringed), a test is a reaction you can see (three plate pairs change on "goes", "changes", "fizzes"; the prediction card
// reveals each group after a beat), the C=C fade (drops, shake, the fade; Br2 used up at the C=C; the alkane stays
// orange; room light), the -COOH fizz (spatula, the proton hop, the fizz, gas to the limewater, milky; an alcohol does not
// fizz), the -OH green (warm, orange to green; the H on the C-OH carbon against the tertiary carbon with none) and what
// green and orange can claim.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, prog} from '../../kit';
import {BR, CARB, DBOT, DBOT_A, DICH, FRUIT, LIME, LIME_A, RK_A, sc} from './common';
import {
	AChip, AMB, Bubbles, CAND5, CC, COOH, CandStrip, DimG, Fade, FallDrop, GREYS, GasPath, HTag, INK, INK_SOFT, MistakeX, MolAt, NAVY, OHV, PicF, PicV, ProtonHop, ShrinkAt, Spatula, Sx, TaskLine, Thumb,
	TubeAt, clamp01, lerp, natPt, smooth, tubeW, vis,
} from './parts';
import type {Cand} from './parts';

const RKP = BR.orange;
export const mouthOf = (x: number, y: number, h: number) => natPt(RKP, x, y, h, RK_A.mouth[0], RK_A.mouth[1]);
export const liqOf = (x: number, y: number, h: number) => natPt(RKP, x, y, h, RK_A.liquid[0], RK_A.liquid[1]);
/** The five candidates with their group rings always shown (rings write with the card). */
export const cands = (over: Partial<Cand>[] = []): Cand[] => CAND5.map((c, i) => ({...c, ring: {cc: -1000, oh: -1000, cooh: -1000}, ...over[i]}));

/** Mini prediction stack at the right edge (the grid from scene 2, shrunk); row `lit` is current. */
export const PredStack: React.FC<{lit: number; x?: number; y?: number}> = ({lit, x = 1560, y = 372}) => {
	const rows: [string, string][] = [['C=C', CC], ['–COOH', COOH], ['–OH', OHV]];
	return (
		<g>
			{rows.map(([t, c], i) => (
				<g key={t} opacity={i === lit ? 1 : 0.45}>
					<rect x={x} y={y + i * 70} width={264} height={56} rx={28} fill={i === lit ? '#fff1dd' : '#fffdf8'} stroke={i === lit ? AMB : c} strokeWidth={i === lit ? 5 : 3} />
					<Sx x={x + 132} y={y + i * 70 + 39} text={t} size={32} color={c} anchor="middle" weight={800} at={-1000} />
				</g>
			))}
		</g>
	);
};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {bottles: 'bottles', list: 'The list', c1: 'cyclohexane', c2: 'cyclohexene', c3: 'ethanol', c4: '2-methylpropan-2-ol', c5: 'ethanoic acid', colourless: 'colourless', looking: 'looking', cant: "can't see", does: 'does', three: 'Three quick', out: 'out'});
const LETTERS = ['V', 'W', 'X', 'Y', 'Z'];
export const SceneHook: React.FC = () => {
	const BH = 430, BY = 380;
	const at5 = [K1.c1, K1.c2, K1.c3, K1.c4, K1.c5];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Which group is in the bottle?" at={0} />
			<CandStrip c={cands(at5.map(a => ({at: a - 4, ring: {cc: a + 10, oh: a + 10, cooh: a + 10}})))} />
			<ShrinkAt cx={960} cy={BY + BH} k={0.8} at={K1.out - 10}>
				{LETTERS.map((L, i) => {
					const x = 330 + i * 290;
					const [lx, ly] = natPt(DBOT, x, BY, BH, DBOT_A.label[0], DBOT_A.label[1]);
					return (
						<g key={L}>
							<PicV p={DBOT} x={x} y={BY} h={BH} at={2 + i * 3} />
							<Sx x={lx} y={ly + 26} text={L} size={72} color={NAVY} anchor="middle" weight={800} at={14 + i * 6} />
						</g>
					);
				})}
			</ShrinkAt>
			<Fade at={K1.colourless} out={K1.does - 10}>
				<Sx x={960} y={900} text="all colourless liquids: looking won't help" size={44} color={INK} anchor="middle" hand weight={700} at={-1000} />
				<Sx x={960} y={970} text="you can't see a C=C or an O–H group" size={40} color={INK_SOFT} anchor="middle" weight={700} at={K1.cant} />
			</Fade>
			{([[BR.clear, 'colour goes'], [DICH.green, 'colour changes'], [CARB.fizz, 'fizz']] as const).map(([p, t], i) => (
				<g key={t}>
					<Thumb p={p} x={430 + i * 420} y={850} h={180} at={K1.does + i * 8} />
					<Sx x={430 + i * 420 + 160} y={960} text={t} size={38} color={INK} hand weight={700} at={K1.does + i * 8 + 6} />
				</g>
			))}
			{void K1.bottles}{void K1.list}{void K1.looking}{void K1.three}
		</svg>
	);
};

// ---------- 2. A test is a reaction you can see ----------
const K2 = cues(sc('reaction-you-can-see'), {borrows: 'borrows', module: 'Module 7', trick: 'trick', only: 'only one', see: 'change you can see', goes: 'goes', changes: 'changes', fizzes: 'fizzes', predict: 'predict', w1: 'Which group adds', bromine: 'bromine', w2: ['Which group', 2], carbonate: 'carbonate', w3: ['which group', 3], oxidised: 'oxidised'});
export const SceneReaction: React.FC = () => {
	const f = useCurrentFrame();
	const H = 330, Y = 400;
	const pairs: [any, any, number, string][] = [[BR.orange, BR.clear, K2.goes, 'colour goes'], [DICH.orange, DICH.green, K2.changes, 'colour changes'], [CARB.before, CARB.fizz, K2.fizzes, 'gas fizzes']];
	const rows: [string, string, string, string, number, number][] = [
		['adds bromine?', 'C=C', CC, 'M7: addition', K2.w1, K2.bromine + 20],
		['acidic enough for a carbonate?', '–COOH', COOH, 'M7: acids', K2.w2, K2.carbonate + 20],
		['can be oxidised?', '–OH', OHV, 'M7: alcohol oxidation', K2.w3, K2.oxidised + 22],
	];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="A test is a reaction you can see" at={0} />
			<CandStrip c={cands()} />
			<AChip x={96} y={358} text="each test borrows a Module 7 reaction" size={30} color={GREYS} hand={false} at={K2.module} />
			{pairs.map(([a, b, t, cap], i) => {
				const x = 110 + i * 290;
				return (
					<g key={cap}>
						<TubeAt a={a} b={b} swap={t} x={x} y={Y + 30} h={H} />
						<Sx x={x + tubeW(a, H) / 2} y={Y + H + 90} text={cap} size={36} color={INK} anchor="middle" hand weight={700} at={t - 6} />
					</g>
				);
			})}
			<Sx x={110} y={Y + H + 150} text="only one group does it quickly" size={36} color={NAVY} weight={700} at={K2.only} />
			<Fade at={K2.predict - 14}><rect x={1010} y={500} width={814} height={540} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
			<DimG at={K2.predict - 10} to={0.4}>
				<Sx x={1040} y={420} text="the trick: a reaction only one group" size={36} color={NAVY} weight={800} at={K2.trick} />
				<Sx x={1040} y={466} text="does quickly, with a change you can see" size={36} color={NAVY} weight={800} at={K2.only} />
			</DimG>
			<Sx x={1040} y={540} text="before you test, predict" size={40} color={AMB} hand weight={700} at={K2.predict - 10} />
			{rows.map(([q, g, c, chip, qa, ra], i) => {
				const y = 620 + i * 140;
				const r = prog(f, ra, 12);
				return (
					<g key={q} opacity={prog(f, qa - 4, 12)}>
						<Sx x={1040} y={y} text={`Which group ${q}`} size={38} color={INK} weight={700} at={-1000} />
						<rect x={1040} y={y + 22} width={190} height={60} rx={30} fill="#fffdf8" stroke={r > 0.5 ? c : GREYS} strokeWidth={r > 0.5 ? 5 : 3} strokeDasharray={r > 0.5 ? undefined : '8 6'} />
						<Sx x={1135} y={y + 64} text={r > 0.5 ? g : '?'} size={36} color={r > 0.5 ? c : GREYS} anchor="middle" weight={800} at={-1000} />
						<AChip x={1260} y={y + 26} text={chip} size={28} color={GREYS} hand={false} at={ra} />
					</g>
				);
			})}
			{void K2.borrows}{void K2.trick}{void K2.see}{void vis}
		</svg>
	);
};

// ---------- 3. C=C: the fade ----------
const K3 = cues(sc('cc-fade'), {first: 'First', add: 'Add a few', drops: 'drops', shake: 'shake', adds: 'adds across', used: 'used up', fades: 'fades', practical: 'practical', alkane: 'An alkane', orange: 'stays orange', list: 'On our list', c6ene: 'cyclohexene fades', c6ane: "cyclohexane doesn't", bright: 'Bright light', once: 'once'});
const SunX: React.FC<{x: number; y: number; at: number; cross: number}> = ({x, y, at, cross}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<circle cx={x} cy={y} r={26} fill="#f2c94c" stroke="#c99a1c" strokeWidth={3} />
			{Array.from({length: 8}, (_, i) => { const a = (i * Math.PI) / 4; return <line key={i} x1={x + Math.cos(a) * 34} y1={y + Math.sin(a) * 34} x2={x + Math.cos(a) * 48} y2={y + Math.sin(a) * 48} stroke="#c99a1c" strokeWidth={4} strokeLinecap="round" />; })}
			<DrawPath d={`M${x - 50},${y - 50} L${x + 50},${y + 50}`} at={cross} dur={8} color={COOH} width={7} />
			<DrawPath d={`M${x + 50},${y - 50} L${x - 50},${y + 50}`} at={cross + 6} dur={8} color={COOH} width={7} />
		</g>
	);
};
/** Br2 pairs that drift to the C=C at (x, y) and vanish there (used up), on a loop from `at`. */
const BrIn: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return (
		<g>
			{[0, 1, 2].map(i => {
				const u = (((f - at) / 70) + i / 3) % 1;
				const sx = x + [-170, 40, 190][i], sy = y - 90;
				const px = lerp(sx, x, smooth(clamp01(u / 0.8))), py = lerp(sy, y - 10, smooth(clamp01(u / 0.8)));
				const o = u < 0.8 ? Math.min(1, u * 6) : 1 - (u - 0.8) / 0.2;
				return (
					<g key={i} opacity={o}>
						<circle cx={px - 14} cy={py} r={15} fill="#e0702a" stroke="#9a4410" strokeWidth={2} />
						<circle cx={px + 14} cy={py} r={15} fill="#e0702a" stroke="#9a4410" strokeWidth={2} />
						<Sx x={px} y={py + 34} text="Br_2" size={26} color="#9a4410" anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
export const SceneFade: React.FC = () => {
	const T = {x: 110, y: 370, h: 560};
	const [mx, my] = mouthOf(T.x, T.y, T.h);
	const [, ly] = liqOf(T.x, T.y, T.h);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="C=C: the fade" at={0} color={CC} />
			<CandStrip c={cands([{}, {pulse: K3.c6ene, thumbs: [{p: BR.clear, at: K3.c6ene + 10}]}]).map((c, i) => (i === 0 ? {...c, thumbs: [{p: BR.orange, at: K3.c6ane + 10}]} : c))} />
			<TubeAt a={BR.orange} b={BR.clear} swap={K3.fades - 10} x={T.x} y={T.y} h={T.h} rock={[K3.shake, K3.shake + 34]} />
			{[0, 1, 2, 3].map(i => <FallDrop key={i} x={mx} y0={my - 20} y1={ly - 40} at={K3.drops + i * 12} color="#e0702a" />)}
			<HTag x={580} y={430} text="C=C: orange → colourless," size={40} color={CC} at={K3.fades} />
			<HTag x={580} y={480} text="within seconds" size={40} color={CC} at={K3.fades + 6} />
			<Sx x={580} y={566} text="C=C + Br_2 → addition product" size={28} color={GREYS} weight={700} at={K3.adds} />
			<Sx x={580} y={602} text="(Br_2 used up)" size={28} color={GREYS} weight={700} at={K3.used} />
			<AChip x={580} y={622} text="p02 practical" size={28} color={GREYS} hand={false} at={K3.practical} />
			<TubeAt a={BR.orange} x={580} y={700} h={260} at={K3.alkane} />
			<HTag x={800} y={800} text="alkane: stays orange" size={38} color="#c4561a" at={K3.orange} />
			<HTag x={800} y={850} text="no C=C to open" size={34} color={INK_SOFT} at={K3.orange + 10} />
			{/* the molecular inset */}
			<rect x={1040} y={372} width={490} height={350} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<MolAt k="cyclohexene" x={1285} y={570} s={1.0} at={4} ring={{cc: 10}} />
			<BrIn x={1285} y={570 - 74} at={K3.adds} />
			<Sx x={1285} y={700} text="bromine adds across the C=C" size={30} color={INK} anchor="middle" weight={700} at={K3.adds} />
			<PredStack lit={0} />
			<SunX x={1100} y={900} at={K3.bright} cross={K3.once} />
			<HTag x={1180} y={890} text="bright light: slow alkane reaction (c04b)" size={32} color={GREYS} at={K3.bright} />
			<HTag x={1180} y={940} text="so test in room light and read at once" size={34} color={INK} at={K3.once - 30} />
			{void K3.first}{void K3.add}{void K3.used}{void K3.list}{void COOH}
		</svg>
	);
};

// ---------- 4. -COOH: the fizz ----------
const K4 = cues(sc('cooh-fizz'), {next: 'Next', add: 'Add sodium', carb: 'carbonate', stronger: 'stronger acid', proton: 'proton', breaks: 'breaks up', fizzes: 'fizzes', bubble: 'Bubble that', milky: 'milky', confirms: 'confirms', alcohol: 'An alcohol', weak: 'far too weak', nofizz: "doesn't fizz"});
export const SceneFizz: React.FC = () => {
	const f = useCurrentFrame();
	const T = {x: 330, y: 370, h: 520};
	const [mx, my] = mouthOf(T.x, T.y, T.h);
	const [lqx, lqy] = liqOf(T.x, T.y, T.h);
	const LW = {x: 800, y: 430, h: 440};
	const [ix, iy] = natPt(LIME.clear, LW.x, LW.y, LW.h, LIME_A.inlet[0], LIME_A.inlet[1]);
	const hops = [0, 1, 2, 3].map(i => K4.proton - 20 + i * 44);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="–COOH: the fizz" at={0} color={COOH} />
			<CandStrip c={cands([{}, {}, {}, {}, {pulse: K4.fizzes, thumbs: [{p: CARB.fizz, at: K4.fizzes + 10}]}])} />
			<DimG at={-1000} to={0.5}>
				<Thumb p={BR.clear} x={110} y={390} h={170} />
				<Sx x={176} y={590} text="C=C test" size={28} color={INK_SOFT} anchor="middle" hand weight={700} at={-1000} />
			</DimG>
			<TubeAt a={CARB.before} b={CARB.fizz} swap={K4.fizzes - 8} x={T.x} y={T.y} h={T.h} />
			<Spatula x={mx + 20} y={my - 30} at={K4.add - 10} tip={K4.carb} out={K4.carb + 40} />
			<Bubbles x={lqx} y={lqy + 120} at={K4.fizzes} n={8} spread={50} rise={260} color="#ffffff" />
			<HTag x={T.x} y={T.y + T.h + 50} text="NaHCO_3(s) added" size={32} color={INK_SOFT} at={K4.add} />
			<PicV p={LIME.clear} x={LW.x} y={LW.y} h={LW.h} at={K4.bubble - 20} />
			<PicV p={LIME.milky} x={LW.x} y={LW.y} h={LW.h} at={K4.milky} />
			<GasPath a={[mx, my - 10]} b={[ix - 6, iy]} at={K4.bubble} bow={-80} />
			<HTag x={LW.x + 20} y={LW.y + LW.h + 50} text="limewater turns milky: CO_2" size={34} color={INK} at={K4.milky + 10} />
			{/* the proton hop */}
			<rect x={1120} y={372} width={704} height={190} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<Sx x={1150} y={480} text="R–COOH" size={44} color={COOH} weight={800} at={4} />
			<Sx x={1600} y={480} text="HCO_3^{−}" size={44} color={NAVY} weight={800} at={4} />
			{hops.map((h, i) => <ProtonHop key={i} a={[1330, 462]} b={[1590, 462]} at={h} bow={-60} />)}
			<Sx x={1150} y={420} text="stronger acid than carbonic acid" size={30} color={INK} hand weight={700} at={K4.stronger} />
			<Sx x={1150} y={540} text="gives the hydrogen carbonate a proton" size={30} color={INK_SOFT} weight={600} at={K4.proton} />
			<AChip x={1120} y={576} text="c09: why carboxylic acids are acidic" size={28} color={GREYS} hand={false} at={K4.stronger + 20} />
			<DimG at={K4.milky} to={0.5}>
				<Sx x={1110} y={700} text="CH_3COOH + NaHCO_3 → CH_3COONa + H_2O + CO_2" size={30} color={INK} weight={800} at={K4.fizzes - 6} />
			</DimG>
			<Sx x={1110} y={756} text="CO_2 + Ca(OH)_2 → CaCO_3(s) + H_2O" size={30} color={GREYS} weight={700} at={K4.milky} />
			<Thumb p={CARB.before} x={1130} y={800} h={220} at={K4.nofizz - 20} />
			<HTag x={1320} y={880} text="alcohol: far too weak an acid" size={36} color={OHV} at={K4.alcohol} />
			<HTag x={1320} y={930} text="no fizz" size={40} color={OHV} at={K4.nofizz} />
			{void K4.next}{void K4.breaks}{void K4.confirms}{void K4.weak}{void f}
		</svg>
	);
};

// ---------- 5. -OH: the green ----------
const K5 = cues(sc('oh-green'), {hydroxyl: 'hydroxyl', warm: 'Warm', primary: 'primary or secondary', oxidised: 'oxidised', ions: 'ions', eth: 'Ethanol is', green2: 'turns green', tertiary: 'tertiary', noh: 'no hydrogen', orange: 'stays orange', alkanes: 'Alkanes', ester: 'Esterification', smell: 'smell', work: 'work'});
const Heat: React.FC<{x: number; y: number; w: number; at: number}> = ({x, y, w, at}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{[0, 1, 2, 3].map(i => {
				const xx = x - w / 2 + (i + 0.5) * (w / 4);
				let d = '';
				for (let k = 0; k <= 10; k++) d += `${k ? 'L' : 'M'}${(xx + Math.sin(k * 0.9 + f * 0.25 + i) * 7).toFixed(1)},${(y - k * 6).toFixed(1)} `;
				return <path key={i} d={d} fill="none" stroke="#e07a3a" strokeWidth={4} strokeLinecap="round" opacity={0.8} />;
			})}
		</g>
	);
};
export const SceneGreen: React.FC = () => {
	const f = useCurrentFrame();
	const T = {x: 300, y: 370, h: 500};
	const [fx, fy] = natPt(DICH.orange, T.x, T.y, T.h, 1000, RK_A.foot);
	const E = {x: 1010, y: 610, s: 1.25};
	const B = {x: 1500, y: 600, s: 1.1};
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="–OH: the green" at={0} color={OHV} />
			<CandStrip c={cands([{}, {}, {pulse: K5.eth, thumbs: [{p: DICH.green, at: K5.eth + 20}]}, {pulse: K5.orange, thumbs: [{p: DICH.orange, at: K5.orange + 10}]}])} />
			<DimG at={-1000} to={0.5}>
				<Thumb p={BR.clear} x={110} y={390} h={150} />
				<Thumb p={CARB.fizz} x={110} y={580} h={150} />
			</DimG>
			<TubeAt a={DICH.orange} b={DICH.green} swap={K5.ions - 16} x={T.x} y={T.y} h={T.h} />
			<Heat x={fx} y={fy + 30} w={200} at={K5.warm} />
			<AChip x={fx - 90} y={fy + 50} text="water bath" size={28} color={GREYS} hand={false} at={K5.warm} />
			<Sx x={760} y={430} text="Cr_2O_7^{2−} (orange) → Cr^{3+} (green)" size={36} color={INK} weight={800} at={K5.ions - 10} />
			{/* ethanol: an H on the C-OH carbon */}
			<MolAt k="ethanol" x={E.x} y={E.y} s={E.s} at={4} ring={{oh: 10}} />
			<line x1={E.x} y1={E.y - 27 * E.s} x2={E.x} y2={E.y - 27 * E.s - 70} stroke={INK} strokeWidth={5} opacity={prog(f, K5.primary, 12)} />
			<Sx x={E.x} y={E.y - 27 * E.s - 80} text="H" size={40} color={INK} anchor="middle" weight={800} at={K5.primary} />
			<ellipse cx={E.x} cy={E.y - 27 * E.s - 92} rx={34} ry={32} fill="none" stroke={AMB} strokeWidth={5} opacity={prog(f, K5.primary + 10, 12)} />
			<Sx x={E.x + 150} y={E.y - 120} text="1°" size={44} color={OHV} weight={800} at={K5.eth} />
			<HTag x={760} y={790} text="1° or 2°: H on the C–OH carbon" size={36} color={OHV} at={K5.primary + 10} />
			<AChip x={760} y={816} text="c08a" size={28} color={GREYS} hand={false} at={K5.primary + 20} />
			{/* the tertiary alcohol: no H on that carbon */}
			<MolAt k="tBuOH" x={B.x} y={B.y} s={B.s} at={6} ring={{oh: K5.tertiary}} />
			<ellipse cx={B.x} cy={B.y + 18 * B.s} rx={30} ry={30} fill="none" stroke={COOH} strokeWidth={5} opacity={prog(f, K5.noh, 12)} />
			<HTag x={B.x + 50} y={B.y + 60} text="no H" size={34} color={COOH} at={K5.noh} />
			<HTag x={1320} y={790} text="3°: stays orange" size={38} color="#c4561a" at={K5.orange} />
			<Thumb p={DICH.orange} x={1640} y={680} h={180} at={K5.orange} />
			<Sx x={760} y={910} text="alkanes and ethanoic acid: usually orange too" size={34} color={INK} weight={700} at={K5.alkanes} />
			<DimG at={K5.work} to={0.45}>
				<PicV p={FRUIT} x={1560} y={900} h={110} at={K5.smell} />
				<Sx x={760} y={980} text="esterification (c10): fruity smell; needs conc. H_2SO_4" size={28} color={GREYS} weight={700} at={K5.smell} />
			</DimG>
			{void K5.hydroxyl}{void K5.oxidised}{void K5.green2}{void K5.ester}{void PicF}{void tubeW}
		</svg>
	);
};

// ---------- 6. What green can and can't say ----------
const K6 = cues(sc('green-limits'), {green: 'Green tells', oxidised: 'oxidised', aldehydes: 'Aldehydes do', only: 'only when', list: 'On our list', arent: "they aren't", alkene: 'An alkene', alone: 'alone', orange: 'And orange', tertiary: 'A tertiary', anyway: 'anyway', so: 'So orange', detected: 'detected'});
export const SceneGreenLimits: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="What green and orange can claim" at={0} />
		<CandStrip c={cands(CAND5.map(() => ({light: [K6.list, K6.alkene] as [number, number]})))} />
		<AChip x={760} y={356} text="no aldehydes on the list" size={30} color={GREYS} hand={false} at={K6.list} />
		<TubeAt a={DICH.green} x={110} y={410} h={520} />
		<Sx x={560} y={470} text="green = something" size={42} color="#2f7a3a" weight={800} at={2} />
		<Sx x={560} y={522} text="was oxidised" size={42} color="#2f7a3a" weight={800} at={K6.oxidised - 20} />
		<AChip x={560} y={548} text="aldehydes too (c08b)" size={30} color={GREYS} hand={false} at={K6.aldehydes} />
		<Sx x={560} y={680} text="→ 1° or 2° alcohol" size={42} color={OHV} weight={800} at={K6.arent} />
		<Sx x={560} y={724} text="when aldehydes aren't candidates" size={28} color={INK_SOFT} weight={600} at={K6.arent} />
		<HTag x={560} y={810} text="after a bromine fade, green" size={34} color={GREYS} at={K6.alkene} />
		<HTag x={560} y={854} text="alone isn't proof of –OH" size={34} color={GREYS} at={K6.alone} />
		<TubeAt a={DICH.orange} x={1010} y={410} h={520} />
		<Sx x={1440} y={480} text="orange ≠ no OH" size={48} color="#c4561a" weight={800} at={K6.orange} />
		<MolAt k="tBuOH" x={1620} y={650} s={0.85} at={K6.tertiary - 6} ring={{oh: K6.tertiary + 4}} />
		<HTag x={1440} y={780} text="3°: has OH, stays orange" size={32} color={INK_SOFT} at={K6.anyway} />
		<Fade at={K6.detected - 6}>
			<rect x={1430} y={812} width={394} height={130} rx={18} fill="#fff4e3" stroke="#c4561a" strokeWidth={4} />
			<Sx x={1450} y={866} text="orange = no 1° or 2°" size={36} color="#a8460e" weight={800} at={-1000} />
			<Sx x={1450} y={916} text="alcohol detected" size={36} color="#a8460e" weight={800} at={-1000} />
		</Fade>
		{void K6.green}{void K6.only}{void K6.so}{void MistakeX}{void CC}
	</svg>
);
