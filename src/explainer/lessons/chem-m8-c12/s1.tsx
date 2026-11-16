// C8-12 scenes 1 to 9: the bottle comes back (four C4H8O candidates), one question per technique, the mass narrows the
// formula, a C=O and no O–H (IR), four kinds of carbon, the hydrogens and their neighbours, building butanone, could it
// be butanal (predict, then look), and checking every clue (ledger ticks, crossword).
// Layout: heading top left; candidate strip along the top; the current spectrum in the lower left (the dock); the
// current card at centre right; the evidence ledger as a narrow column at the right edge.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, BandMark, CARD, CandStrip, Chip, DataSheet, DataSheet13, DrawPath, E1, E2, E3, E4, EDGE, FRAG_INK, Full, GOLD, GOLD_INK, GREYT, GTag, HRing, INK, INK_SOFT, IRAxes, IRTrace, Integ, Ledger, MOLS, Mistake, MolAt, NAVY, NmrAxis, NmrSpec, OHC, COC, PeakLab, Pic, PicH, RED, RangeShade, SPEC12, SpecAxes, StickSpec, Svg, Sx, T, Title, dx, fullRow, prog, pulse, smooth, vis, wx, ty,
} from './parts';
import type {Cand, IG, LRow, NG, Peak, SG} from './parts';
import {IR_butanone} from '../chem-m8-c10/irdata';
import {PL} from './assets';
import {K} from './common';

const ON = -1000;
export const TITLE = 'Which structure fits every clue?';
const SY = 140, SH = 160, SW = 350, SG_ = 28;
export const strip = (st: Partial<Record<number, {glow?: number; dim?: number; strike?: number}>> = {}, at: number = ON): Cand[] => [
	{k: 'butanone', name: 'butanone', chip: '72'},
	{k: 'butanal', name: 'butanal', chip: '72'},
	{k: 'mepropanal', name: '2-methylpropanal', chip: '72'},
	{k: 'butenol', name: 'but-3-en-2-ol', chip: '72'},
].map((c, i) => ({...c, at: at < -100 ? at : at + i * 8, s: 0.52, ...(st[i] ?? {})}) as Cand);
export const Strip: React.FC<{c: Cand[]}> = ({c}) => <CandStrip c={c} x={96} y={SY} w={SW} gap={SG_} h={SH} size={26} molY={0.36} />;
export const DOCK: SG = {x: 170, y: 430, w: 840, h: 380, m0: 10, m1: 80};
export const IRD: IG = {x: 170, y: 430, w: 840, h: 380};
export const C13D: NG = {x: 190, y: 470, w: 840, h: 340, d0: 220};
export const HD: NG = {x: 130, y: 470, w: 900, h: 340, d0: 5};
export const RX = 1060;
/** Butanone proton spectrum (HMDB H1387, 500 MHz): q 2.46 (2H), s 2.14 (3H), t 1.06 (3H); tallest line ∝ area. */
export const BUT_H = (c: [string, string, string]): Peak[] => [{d: 2.46, n: 4, J: 0.05, h: 0.21, color: c[0]}, {d: 2.14, n: 1, h: 0.85, color: c[1]}, {d: 1.06, n: 3, J: 0.05, h: 0.43, color: c[2]}];
export const BUT_C: Peak[] = [{d: 209, h: 0.45, color: E4}, {d: 37, h: 0.8, color: E2}, {d: 29, h: 0.75, color: E3}, {d: 8, h: 0.85, color: E1}];
export const ledger = (over: Partial<LRow>[] = []): LRow[] => ['MS', 'IR', '¹³C', '¹H'].map((label, i) => ({label, ...(over[i] ?? {})}));
export const BUT_FULL = fullRow([{el: 'C', h: 3}, {el: 'C', dblO: true}, {el: 'C', h: 2}, {el: 'C', h: 3}], 1150, 600, 120);

// ---------- 1. hook ----------
const K1 = K('hook', {remember: 'Remember the', s72: 'seventy-two,', four: 'four candidate', couldnt: "couldn't finish", ir: 'met infrared', together: 'Put the', survive: 'should survive'});
export const SceneHook: React.FC = () => (
	<Svg>
		<Title text={TITLE} />
		<Strip c={strip({}, K1.four)} />
		<PicH p={PL.bottle} cx={230} cy={600} h={380} />
		<Sx x={230} y={670} text="?" size={90} color={NAVY} anchor="middle" weight={800} at={ON} />
		<Chip x={230} y={820} text="C, H and one O" size={32} color={NAVY} ink={INK} anchor="middle" at={K1.remember} />
		<SpecAxes g={{x: 480, y: 420, w: 520, h: 300, m0: 10, m1: 80}} at={K1.s72 - 10} size={26} />
		<StickSpec g={{x: 480, y: 420, w: 520, h: 300, m0: 10, m1: 80}} bars={SPEC12.butanone} at={K1.s72 - 10} stagger={3} paint={[{mz: 72, color: GOLD, at: K1.s72}]} bw={7} />
		<GTag x={480} y={830} text="c09: M^{+} at 72, four candidates left" size={28} at={K1.s72 + 10} />
		<Sx x={480} y={900} text="no single spectrum can finish the job" size={34} color={INK} hand at={K1.couldnt} />
		<Pic p={PL.ir} cx={1150} cy={520} w={250} at={K1.ir} slide={60} />
		<Pic p={PL.nmr} cx={1380} cy={520} w={190} at={K1.ir + 10} slide={60} />
		<Pic p={PL.ms} cx={1260} cy={700} w={240} at={K1.ir + 20} slide={60} />
		<Sx x={1260} y={860} text="put the evidence together" size={34} color={NAVY} anchor="middle" hand at={K1.together} />
		<Ledger rows={ledger()} at={K1.survive} />
	</Svg>
);

// ---------- 2. one question for each technique ----------
const K2 = K('technique-roles', {each: 'Each technique', ms: 'Mass spectrometry', ir: 'Infrared asks', c13: 'Carbon-13 NMR', h1: 'Proton NMR', order: 'A good', map: 'the map.', every: 'every one'});
const Q2: [string, keyof typeof K2, 'ms' | 'ir' | 'nmr'][] = [
	['MS: how heavy? which pieces break off?', 'ms', 'ms'],
	['IR: which bonds? which are missing?', 'ir', 'ir'],
	['¹³C NMR: how many kinds of carbon?', 'c13', 'nmr'],
	['¹H NMR: which H, how many, how many neighbours?', 'h1', 'nmr'],
];
export const SceneRoles: React.FC = () => {
	const f = useCurrentFrame();
	const br = prog(f, K2.every, 12);
	return (
		<Svg>
			<Title text="One question for each technique" />
			{Q2.map(([t, k, p], i) => {
				const v = prog(f, K2[k], 12);
				const y = 170 + i * 150;
				return (
					<g key={i} opacity={0.35 + 0.65 * v}>
						<rect x={260} y={y} width={1300} height={124} rx={20} fill={CARD} stroke={v > 0.5 ? NAVY : EDGE} strokeWidth={v > 0.5 ? 4 : 2.5} />
						<PicH p={PL[p]} cx={180} cy={y + 62} h={110} />
						<Sx x={290} y={y + 78} text={t} size={42} color={INK} weight={700} at={K2[k]} />
					</g>
				);
			})}
			<Chip x={260} y={800} text="mass → groups → map" size={44} color={NAVY} ink={NAVY} at={K2.map} sw={4} />
			<GTag x={760} y={808} text="c09: MS: mass, IR: groups, NMR: map" size={28} at={K2.map + 20} />
			{br > 0.01 ? <g opacity={br}>
				<path d="M1590,180 L1620,180 L1620,764 L1590,764" fill="none" stroke={AMBER_INK} strokeWidth={5} />
				<T x={1640} y={460} w={200} text="one structure fits all" size={36} color={AMBER_INK} />
			</g> : null}
		</Svg>
	);
};

// ---------- 3. the mass narrows the formula ----------
const K3 = K('mass-formula', {step: 'Step one,', ion: 'The molecular', alone: 'on its', c5: 'C five', told: 'We were', one: 'one oxygen,', c4: 'C four', narrows: 'mass narrows', fix: 'present fix'});
export const SceneMass: React.FC = () => {
	const f = useCurrentFrame();
	const st = prog(f, K3.one + 20, 12);
	return (
		<Svg>
			<Title text={TITLE} />
			<Strip c={strip()} />
			<Sx x={170} y={380} text="Step 1: the mass" size={40} color={NAVY} hand at={K3.step} />
			<SpecAxes g={DOCK} at={ON} size={26} />
			<StickSpec g={DOCK} bars={SPEC12.butanone} paint={[{mz: 72, color: GOLD, at: ON}]} />
			<PeakLab g={DOCK} mz={72} h={25} text="M^{+} = 72" at={K3.ion} size={32} color={GOLD_INK} dy={-16} weight={800} />
			<Sx x={RX} y={440} text="M^{+} = 72" size={48} color={GOLD_INK} weight={800} at={K3.ion} />
			<g opacity={(1 - 0.55 * st) * prog(f, K3.c5, 12)}>
				<Sx x={RX} y={530} text="C_5H_12 = 72 (no O)" size={42} color={INK} weight={700} at={ON} />
				{st > 0.01 ? <line x1={RX - 10} x2={RX + 400} y1={518} y2={518} stroke={RED} strokeWidth={5} opacity={st} /> : null}
			</g>
			<Sx x={RX} y={610} text="C_4H_8O = 72 (one O)" size={44} color={NAVY} weight={800} at={K3.one} />
			<Chip x={RX} y={650} text="given: C, H and one O" size={30} color={NAVY} ink={INK} at={K3.told} />
			<Mistake x={RX} y={760} text="the mass fixes the formula" size={34} at={K3.narrows} cross={K3.fix} note="mass narrows it; the elements fix it" noteW={500} />
			<Ledger rows={ledger([{text: '72 → C_4H_8O', textAt: K3.fix + 20, hot: K3.fix + 20}])} />
		</Svg>
	);
};

// ---------- 4. a C=O, and no O–H ----------
const K4 = K('ir-groups', {step: 'Step two,', sharp: 'sharp dip', missing: "what's missing.", noBand: 'no broad', rules: 'That rules', butenol: 'but-3-en-2-ol.', must: 'must be', ald: 'an aldehyde', only: 'only three', mp: '2-methylpropanal.'});
export const SceneIR: React.FC = () => {
	const f = useCurrentFrame();
	const x0 = wx(IRD, 3550), x1 = wx(IRD, 3230);
	return (
		<Svg>
			<Title text={TITLE} />
			<Strip c={strip({0: {glow: K4.ald}, 1: {glow: K4.ald}, 2: {glow: K4.ald}, 3: {strike: K4.butenol}})} />
			<GTag x={1180} y={312} text="needs an O–H band" size={26} at={K4.butenol + 10} />
			<Sx x={170} y={380} text="Step 2: the bonds" size={40} color={NAVY} hand at={K4.step} />
			<IRAxes g={IRD} ticksAt={ON} size={26} />
			<RangeShade g={IRD} a={3230} b={3550} at={K4.missing} color={OHC} op={0.14} />
			<RangeShade g={IRD} a={1680} b={1750} at={K4.sharp} color={COC} op={0.2} />
			<IRTrace g={IRD} pts={IR_butanone} at={K4.step} />
			<BandMark g={IRD} wn={1718} t={4} top={50} rx={18} at={K4.sharp} color={COC} text="C=O, 1715" dx={30} dy={-6} anchor="start" />
			<Chip x={(x0 + x1) / 2} y={IRD.y + 10} text="no broad band: no O–H" size={28} color={OHC} ink={OHC} anchor="middle" at={K4.noBand} />
			<g opacity={vis(f, K4.noBand + 20, K4.butenol, 12)}>
				<line x1={wx(IRD, 3416)} y1={ty(IRD, 79) + 6} x2={wx(IRD, 3416)} y2={ty(IRD, 50)} stroke={GREYT} strokeWidth={2.5} strokeDasharray="5 4" />
				<Chip x={wx(IRD, 3416) - 20} y={ty(IRD, 50)} text="weak, narrow: not an O–H band" size={26} color={GREYT} fill="#f1eee7" ink={GREYT} />
			</g>
			<DataSheet x={1048} y={340} w={516} rowH={44} size={26} lit={{1: K4.missing, 5: K4.sharp}} dimRest={ON} />
			<T x={RX} y={860} w={500} text="the one O is in the C=O: an aldehyde or a ketone" size={32} color={INK} at={K4.must} />
			<GTag x={RX} y={960} text="C_4H_8O with a C=O: only these 3" size={28} at={K4.mp} />
			<Ledger rows={ledger([{text: '72 → C_4H_8O', textAt: ON}, {note: 'c10: a missing|band rules out',  noteAt: K4.missing, noteOut: K4.ald, text: 'C=O ✓|O–H ✗', textAt: K4.ald, hot: K4.ald}])} />
		</Svg>
	);
};

// ---------- 5. four kinds of carbon ----------
const K5 = K('carbon-map', {step: 'Step three,', four: 'four peaks,', mp: 'In 2-methylpropanal,', swap: 'swap places,', out: "That one's", s209: 'two hundred', range: 'the data', two: 'last two.'});
export const SceneCarbon: React.FC = () => {
	const f = useCurrentFrame();
	const show = vis(f, K5.mp, K5.range - 10, 12);
	const mv = prog(f, K5.swap, 12);
	return (
		<Svg>
			<Title text={TITLE} />
			<Strip c={strip({0: {glow: ON}, 1: {glow: ON}, 2: {strike: K5.out}, 3: {strike: ON}})} />
			<Sx x={170} y={400} text="Step 3: the carbon map" size={40} color={NAVY} hand at={K5.step} />
			<NmrAxis g={C13D} size={26} />
			<NmrSpec g={C13D} peaks={BUT_C.map((p, i) => ({...p, color: GREYT, at: K5.step + 10 + i * 6, tag: i === 0 ? '209: C=O carbon' : undefined, tagAt: K5.s209, tagColor: COC}))} />
			<Chip x={dx(C13D, 30)} y={C13D.y + 6} text="4 environments" size={32} color={NAVY} ink={NAVY} anchor="middle" at={K5.four} />
			{show > 0.01 ? <g opacity={show}>
				<MolAt k="mepropanal" x={1300} y={560} s={1.2} atoms={[{i: 0, at: K5.swap, color: E1}, {i: 4, at: K5.swap, color: E1}]} />
				{mv > 0.01 ? <line x1={1270} x2={1370} y1={400} y2={700} stroke={NAVY} strokeWidth={3} strokeDasharray="10 8" opacity={mv} /> : null}
				<Sx x={1300} y={360} text="2-methylpropanal: 3 peaks expected" size={30} color={INK} anchor="middle" hand weight={800} at={ON} />
				<GTag x={1100} y={760} text="c11a: carbons that swap share a peak" size={28} />
				<Chip x={1100} y={830} text="3 ≠ 4" size={36} color={RED} ink={RED} at={K5.out} />
			</g> : null}
			<DataSheet13 x={RX} y={330} w={500} rowH={46} size={26} lit={[{i: 9, at: K5.range, color: COC}]} at={K5.range - 10} />
			<Sx x={RX} y={1000} text="covers ketones and aldehydes: can't decide" size={30} color={COC} hand weight={800} at={K5.range + 20} />
			<Ledger rows={ledger([{text: '72 → C_4H_8O', textAt: ON}, {text: 'C=O ✓|O–H ✗', textAt: ON}, {text: '4 environments', textAt: K5.two, hot: K5.two}])} />
			{void pulse}
		</Svg>
	);
};

// ---------- 6. the hydrogens ----------
const K6 = K('proton-map', {step: 'Step four,', three: 'three signals,', adds: 'adds up', real: 'real numbers.', ethyl: 'ethyl group.', singlet: 'a singlet', s21: 'about 2.1,', beside: 'beside the'});
export const SceneProton: React.FC = () => {
	const f = useCurrentFrame();
	const eth = prog(f, K6.ethyl, 2) > 0.5, sg = prog(f, K6.singlet, 2) > 0.5;
	return (
		<Svg>
			<Title text={TITLE} />
			<Strip c={strip({0: {glow: ON}, 1: {glow: ON}, 2: {strike: ON}, 3: {strike: ON}})} />
			<Sx x={170} y={400} text="Step 4: the hydrogens" size={40} color={NAVY} hand at={K6.step} />
			<NmrAxis g={HD} step={1} size={26} />
			<NmrSpec g={HD} tmsTag="TMS" peaks={BUT_H([eth ? E2 : GREYT, sg ? E3 : GREYT, eth ? E1 : GREYT]).map((p, i) => ({...p, at: K6.step + i * 8, tag: i === 1 ? 'about 2.1' : undefined, tagAt: K6.s21, tagSize: 28}))} />
			<Integ g={HD} at={K6.three} unit={26} base={HD.y + HD.h - 10} steps={[{d: 1.06, n: 3, color: E1}, {d: 2.14, n: 3, color: E3}, {d: 2.46, n: 2, color: E2, tx: -40}]} />
			<Sx x={RX} y={440} text="2 + 3 + 3 = 8 = H in C_4H_8O" size={38} color={INK} weight={700} at={K6.adds} />
			<GTag x={RX} y={470} text="c11b: the formula sets the real numbers" size={26} at={K6.real} />
			<Chip x={RX} y={570} text="ethyl: triplet 3H + quartet 2H" size={32} color={AMBER_INK} ink={INK} at={K6.ethyl} />
			<Chip x={RX} y={650} text="CH_3 singlet: no H next door" size={32} color={E3} ink={INK} at={K6.singlet + 20} />
			<GTag x={RX} y={740} text="beside C=O: about 2.1" size={28} at={K6.beside} />
			<Ledger rows={ledger([{text: '72 → C_4H_8O', textAt: ON}, {text: 'C=O ✓|O–H ✗', textAt: ON}, {text: '4 environments', textAt: ON}, {text: 'ethyl +|lone CH_3', textAt: K6.beside + 20, hot: K6.beside + 20}])} />
		</Svg>
	);
};

// ---------- 7. putting the pieces together ----------
const K7 = K('assemble', {build: 'Now build', ethyl: 'an ethyl', ch3: 'a C H three', co: 'a C equals', one: 'only one', side: 'one side', but: 'butanone.'});
export const SceneAssemble: React.FC = () => {
	const f = useCurrentFrame();
	const j = smooth(prog(f, K7.one, 40));
	const done = prog(f, K7.but, 14);
	const r = fullRow([{el: 'C', h: 3}, {el: 'C', dblO: true}, {el: 'C', h: 2}, {el: 'C', h: 3}], 640, 600, 150);
	const piece = (x0: number, x1: number, y: number, text: string, color: string, at: number) => {
		const v = prog(f, at, 12) * (1 - done);
		return v > 0.01 ? <g opacity={v}><rect x={x0 + (x1 - x0) * j - 10} y={y - 52} width={text.length * 26 + 20} height={70} rx={14} fill={CARD} stroke={color} strokeWidth={4} /><Sx x={x0 + (x1 - x0) * j} y={y} text={text} size={44} color={INK} weight={800} at={ON} /></g> : null;
	};
	return (
		<Svg>
			<Title text={TITLE} />
			<Strip c={strip({0: {glow: K7.but}, 1: {dim: K7.but}, 2: {strike: ON}, 3: {strike: ON}})} />
			<Sx x={170} y={400} text="Now build it" size={40} color={NAVY} hand at={K7.build} />
			{piece(220, 470, 600, 'CH_3–', E3, K7.ch3)}
			{piece(720, 620, 600, '–C(=O)–', COC, K7.co)}
			{piece(1280, 840, 600, '–CH_2CH_3', E2, K7.ethyl)}
			<Sx x={960} y={760} text="2 free bonds on C=O, 1 on each end piece" size={34} color={INK_SOFT} anchor="middle" hand at={K7.one} out={K7.but} />
			<g opacity={done}>
				<Full row={r} />
				<HRing row={r} idx={r.hs[0]} at={K7.but} color={E3} />
				<HRing row={r} idx={r.hs[2]} at={K7.but} color={E2} />
				<HRing row={r} idx={r.hs[3]} at={K7.but} color={E1} />
				<Sx x={865} y={830} text="butanone" size={44} color={NAVY} anchor="middle" weight={800} at={ON} />
			</g>
			<Ledger rows={ledger([{text: '72 → C_4H_8O', textAt: ON}, {text: 'C=O ✓|O–H ✗', textAt: ON}, {text: '4 environments', textAt: ON}, {text: 'ethyl +|lone CH_3', textAt: ON}])} />
			{void AMBER_INK}{void E4}{void FRAG_INK}
		</Svg>
	);
};

// ---------- 8. could it still be butanal? ----------
const K8 = K('rival-isomer', {could: 'But could', test: 'Test it', predict: 'Predict what', has: 'Butanal has', s98: 'near 9.8', four: 'four proton', none: 'none of', contra: 'clear contradiction', fit: 'clues fit'});
const H11: NG = {x: 130, y: 470, w: 900, h: 340, d0: 11};
const BUTANAL = fullRow([{el: 'C', h: 3}, {el: 'C', h: 2}, {el: 'C', h: 2}, {el: 'C', h: 1, dblO: true}], 1130, 560, 110);
export const SceneRival: React.FC = () => {
	const f = useCurrentFrame();
	const pr = prog(f, K8.predict, 12);
	const dash = (d: number, w: number, h: number, at: number) => { const v = prog(f, at, 12); return v > 0.01 ? <rect opacity={v} x={dx(H11, d + w / 2)} y={H11.y + H11.h - H11.h * h} width={dx(H11, d - w / 2) - dx(H11, d + w / 2)} height={H11.h * h} rx={8} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="9 7" /> : null; };
	const notThere = (d: number, h: number, at: number, text: string) => { const v = prog(f, at, 12); return v > 0.01 ? <g opacity={v}><ellipse cx={dx(H11, d)} cy={H11.y + H11.h - H11.h * h / 2} rx={44} ry={H11.h * h / 2 + 24} fill="none" stroke={RED} strokeWidth={4} /><Sx x={dx(H11, d)} y={H11.y + H11.h - H11.h * h - 34} text={text} size={28} color={RED} anchor="middle" hand weight={800} at={ON} /></g> : null; };
	return (
		<Svg>
			<Title text="Could it still be butanal?" />
			<Strip c={strip({0: {glow: ON}, 1: {strike: K8.contra}, 2: {strike: ON}, 3: {strike: ON}})} />
			<Sx x={170} y={400} text="predict what butanal would show, then look for it" size={36} color={NAVY} hand at={K8.test} />
			<NmrAxis g={H11} step={1} size={26} />
			<NmrSpec g={H11} tmsTag="TMS" peaks={BUT_H([E2, E3, E1]).map(p => ({...p, J: 0.04}))} />
			{dash(9.77, 0.4, 0.3, K8.s98)}
			{pr > 0.01 ? <g opacity={pr}>{dash(2.42, 0.4, 0.3, K8.four)}{dash(1.675, 0.4, 0.3, K8.four + 6)}{dash(0.97, 0.4, 0.3, K8.four + 12)}</g> : null}
			<Sx x={dx(H11, 9.77)} y={H11.y + 30} text="given: H on a C=O carbon, about 9.5 to 10 ppm" size={26} color={GREYT} anchor="middle" hand weight={800} at={K8.s98} />
			{notThere(9.77, 0.3, K8.none, 'not there')}
			{prog(f, K8.none + 15, 12) > 0.01 ? <g opacity={prog(f, K8.none + 15, 12)}><ellipse cx={dx(H11, 1.675)} cy={H11.y + H11.h - H11.h * 0.15} rx={44} ry={H11.h * 0.15 + 24} fill="none" stroke={RED} strokeWidth={4} /><Sx x={dx(H11, 1.675) + 14} y={600} text="not there" size={28} color={RED} hand weight={800} at={ON} /></g> : null}
			<Sx x={dx(H11, 2.14)} y={H11.y + H11.h - H11.h * 0.85 - 50} text="butanal has no 3H singlet" size={26} color={RED} anchor="middle" hand weight={800} at={K8.none + 30} />
			<Full row={BUTANAL} at={K8.could} />
			<HRing row={BUTANAL} idx={BUTANAL.hs[3]} at={K8.has} color={RED} />
			<Sx x={1295} y={720} text="butanal" size={34} color={INK} anchor="middle" weight={800} at={K8.could} />
			<Mistake x={1100} y={830} text="most clues fit, so it's fine" size={32} at={K8.fit - 20} cross={K8.fit + 4} note="one contradiction rules it out" noteW={480} />
			{void MOLS}
		</Svg>
	);
};

// ---------- 9. check every clue ----------
const K9 = K('check-every-clue', {check: 'Then check', cross: 'crossword:', weighs: 'Butanone weighs', pieces: 'Its pieces', co: 'It has', four: 'four kinds', three: 'three kinds', every: 'Every spectrum', strong: 'strongly supported.', solved: 'bottle solved.'});
export const SceneCheck: React.FC = () => {
	const f = useCurrentFrame();
	const r = fullRow([{el: 'C', h: 3}, {el: 'C', dblO: true}, {el: 'C', h: 2}, {el: 'C', h: 3}], 760, 560, 170);
	const cw = prog(f, K9.cross, 12);
	const clues: [string, number][] = [['MS: 72; breaks give 43 and 57', K9.weighs], ['IR: C=O, no O–H', K9.co], ['¹³C: four kinds of carbon', K9.four], ['¹H: 2 : 3 : 3, ethyl + lone CH_3', K9.three]];
	return (
		<Svg>
			<Title text="Check every clue" />
			{clues.map(([t, at], i) => <g key={i} opacity={prog(f, at, 12)}>
				<rect x={96} y={180 + i * 96} width={560} height={76} rx={16} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
				<Sx x={116} y={230 + i * 96} text={t} size={34} color={INK} weight={700} at={ON} />
			</g>)}
			<Full row={r} size={48} />
			<g opacity={prog(f, K9.pieces, 12)}>
				<DrawPath d={`M${(r.heavy[0][0] + r.heavy[1][0]) / 2 + 8},${r.heavy[0][1] - 44} l-12,30 l14,10 l-12,30`} at={K9.pieces} dur={10} color={RED} width={4} />
				<DrawPath d={`M${(r.heavy[1][0] + r.heavy[2][0]) / 2 + 8},${r.heavy[1][1] - 44} l-12,30 l14,10 l-12,30`} at={K9.pieces + 8} dur={10} color={RED} width={4} />
				<Sx x={1015} y={430} text="breaks give 43 and 57 (c09)" size={30} color={RED} anchor="middle" hand weight={800} at={ON} />
			</g>
			<HRing row={r} idx={[r.dblO[1]]} at={K9.co} color={COC} r={32} />
			{[0, 1, 2, 3].map(i => <circle key={i} cx={r.heavy[i][0]} cy={r.heavy[i][1]} r={36} fill="none" stroke={[E3, E4, E2, E1][i]} strokeWidth={4} opacity={prog(f, K9.four + i * 6, 12)} />)}
			<HRing row={r} idx={r.hs[0]} at={K9.three} color={E3} />
			<HRing row={r} idx={r.hs[2]} at={K9.three + 6} color={E2} />
			<HRing row={r} idx={r.hs[3]} at={K9.three + 12} color={E1} />
			{cw > 0.01 ? <g opacity={cw}>
				{['M', 'S', 'I', 'R', 'N'].map((ch, i) => <g key={'a' + i}><rect x={96 + i * 58} y={600} width={54} height={54} fill={i === 2 ? '#fff4d8' : CARD} stroke={INK_SOFT} strokeWidth={2} /><Sx x={123 + i * 58} y={639} text={ch} size={30} color={INK} anchor="middle" weight={800} at={ON} /></g>)}
				{['C', 'H', 'O'].map((ch, i) => <g key={'d' + i}><rect x={212} y={658 + i * 58} width={54} height={54} fill={CARD} stroke={INK_SOFT} strokeWidth={2} /><Sx x={239} y={697 + i * 58} text={ch} size={30} color={INK} anchor="middle" weight={800} at={ON} /></g>)}
				<T x={300} y={700} w={360} text="each answer must fit every answer that crosses it" size={32} color={INK} />
			</g> : null}
			<Sx x={1010} y={860} text="butanone: 72" size={40} color={GOLD_INK} anchor="middle" weight={800} at={K9.weighs} />
			<PicH p={PL.bottle} cx={1420} cy={860} h={230} />
			<Sx x={1420} y={902} text="?" size={56} color={NAVY} anchor="middle" weight={800} at={ON} out={K9.solved} />
			<Chip x={1420} y={985} text="butanone" size={30} color={NAVY} ink={NAVY} anchor="middle" at={K9.solved} />
			<Ledger rows={ledger([{text: '72; 43, 57', textAt: ON, hot: K9.weighs, tick: K9.strong}, {text: 'C=O ✓|O–H ✗', textAt: ON, hot: K9.co, tick: K9.strong + 6}, {text: '4 environments', textAt: ON, hot: K9.four, tick: K9.strong + 12}, {text: '2 : 3 : 3', textAt: ON, hot: K9.three, tick: K9.strong + 18}])} />
			<Sx x={96} y={1010} text="every spectrum agrees: strongly supported" size={36} color={NAVY} hand at={K9.every} />
		</Svg>
	);
};
