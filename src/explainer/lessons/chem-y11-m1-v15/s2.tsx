// Y11 Chem M1 V15 scenes 6 to 12: the shared products (three trough states, the word equation, phenolphthalein, the
// framed symbol equation with Li and K substituted); the cause (two atoms hand their outer electrons to two waters for
// each metal, then three particle-box runs identical except for the energy barrier, with live "reacted" and
// "rate × Li" readouts); the rubidium prediction and answer on the group 1 bars; the fair-test checklist; the surface
// film (fresh and tarnished sodium cross-fading, the film inset); and the memory card beside the five bars.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {runBox} from '../../sims/particle-box';
import type {BoxConfig, BoxRun} from '../../sims/particle-box';
import {Bracket} from '../chem-y11-m1-v01/parts';
import {CUT_DULL, CUT_FRESH, DATA, G1, G3, OILJAR, PHTH, PT, SRC_IE, SRC_PHYS, TR_K, TR_LI, TR_NA, TR_WATER, hold, ie, mp, ph, sc, tp} from './common';
import type {El, TL} from './common';
import {
	Bubbles, Chip, ClipFrame, Countdown, DrawPath, E_BLUE, Fade, Framed, G1Col, GREEN_T, HBarV, HandOff, Heading, INK, K_T, LI_T, MetalBall, NA_T, OR_F, OR_S,
	OR_T, PINK_S, PINK_T, PenArrow, PenRing, PlateB, RAtom, RED_T, Readout, Rich, SVG, SmallWater, Sx, TroughStates, Write, clamp01, prog, richW, ringsOf,
} from './parts';
import {PicF} from '../chem-m8-c01/parts';

const TEAL_OF: Record<string, string> = {Li: LI_T, Na: NA_T, K: K_T};

// ---------- 6. one reaction, three speeds ----------
const K6 = cues(sc('products'), {same: 'same two', gas: 'The gas', hydrogen: ['hydrogen', 1], hydroxide: ['hydroxide', 1], indicator: 'indicator turns', forNa: 'For sodium', plus: 'sodium plus', lithium: 'Lithium and', diff: 'the difference', fast: 'how fast'});
const TX6 = [96, 446, 796];
const eqFor = (s: string) => `2${s}(s) + 2H_2O(l) → 2${s}OH(aq) + H_2(g)`;
export const SceneProducts: React.FC = () => {
	const W1 = richW([{t: 'metal + water → '}], 44), W2 = richW([{t: 'metal hydroxide'}], 44), W3 = richW([{t: ' + '}], 44), W4 = richW([{t: 'hydrogen'}], 44);
	const PL = [TR_LI, TR_NA, TR_K];
	return (
		<SVG>
			<Heading text="One reaction, three speeds" at={0} />
			{G3.map((e, i) => (
				<g key={e.sym}>
					<PicF p={PL[i]} x={TX6[i]} y={790} h={ph(TR_WATER, 320)} />
					<Sx x={TX6[i] + 160} y={772} text={e.sym} size={38} color={TEAL_OF[e.sym]} anchor="middle" weight={800} at={-1000} />
				</g>
			))}
			<Write x={1150} y={900} text="same two products" at={K6.same + 10} size={42} color={INK} />
			<PenArrow a={[1140, 886]} b={[1080, 860]} at={K6.same + 20} color={INK} bend={0.2} width={5} head={16} />
			{/* word equation */}
			<Rich x={96} y={262} segs={[{t: 'Every metal: the same two products'}]} size={38} at={K6.same} />
			<Rich x={96} y={360} segs={[{t: 'metal + water → '}, {t: 'metal hydroxide', c: PINK_T}, {t: ' + '}, {t: 'hydrogen'}]} size={44} at={20} />
			<Sx x={96 + W1 + W2 + W3 + W4 / 2} y={410} text="H_2 (gas)" size={34} color={INK} anchor="middle" weight={800} at={K6.hydrogen} />
			<Sx x={96 + W1 + W2 / 2} y={410} text="OH^{−} (alkaline)" size={34} color={PINK_T} anchor="middle" weight={800} at={K6.hydroxide} />
			<PlateB p={PHTH} cx={1700} bottom={640} h={320} />
			<Sx x={1580} y={430} text="phenolphthalein:" size={30} color={INK} anchor="end" weight={800} at={K6.indicator + 6} />
			<Sx x={1580} y={470} text="colourless in water," size={30} color={INK} anchor="end" weight={800} at={K6.indicator + 10} />
			<Sx x={1580} y={510} text="pink in alkali" size={30} color={PINK_T} anchor="end" weight={800} at={K6.indicator + 14} />
			{/* symbol equations */}
			<Framed x={96} y={540} segs={[{t: eqFor('Na')}]} at={K6.plus} size={52} stroke={GREEN_T} />
			{[DATA.Li, DATA.K].map((e, i) => (
				<Rich key={e.sym} x={130} y={622 + i * 62} segs={[{t: '2'}, {t: e.sym, c: TEAL_OF[e.sym]}, {t: '(s) + 2H_2O(l) → 2'}, {t: e.sym, c: TEAL_OF[e.sym]}, {t: 'OH(aq) + H_2(g)'}]} size={44} at={K6.lithium + i * 12} />
			))}
			<Chip x={1140} y={696} segs={[{t: 'same products; different speed'}]} at={K6.diff} size={44} color={INK} />
			<Sx x={1140} y={812} text="the metal reacts; sodium ions in salt water don't" size={30} color={INK} weight={800} at={K6.diff + 14} />
			{void K6.forNa}{void K6.fast}
		</SVG>
	);
};

// ---------- 7. the cause ----------
const K7 = cues(sc('cause'), {ion: 'positive ion', water: 'The water takes', tightly: 'less tightly', potassium: 'Potassium gives', fastest: 'runs fastest', heats: 'heats the metal', so: 'so sodium', hydrogen: "potassium's hydrogen"});
const COLX = (i: number) => 96 + i * 580;
const PANEL = {y: 250, w: 550, h: 390};
const BOX = {w: 440, h: 270, y: 262, s: 1.24};
const EA = [3.6, 2.4, 1.3];
const boxCfg = (ea: number): BoxConfig => ({
	seed: 5, frames: 260, w: BOX.w, h: BOX.h, speed: 4,
	species: [{id: 'M', r: 11, mass: 3}, {id: 'W', r: 9}, {id: 'I', r: 10, mass: 3}, {id: 'O', r: 8}],
	initial: [{species: 'M', count: 24}, {species: 'W', count: 40}],
	reactions: [{from: ['M', 'W'], to: ['I', 'O'], ea}],
});
const RUNS: BoxRun[] = [];
const runOf = (i: number) => (RUNS[i] ??= runBox(boxCfg(EA[i])));
const BoxView: React.FC<{run: BoxRun; x: number; y: number; sf: number}> = ({run, x, y, sf}) => {
	const out: React.ReactNode[] = [];
	for (let i = 0; i < run.slots; i++) {
		const s = run.sp[sf * run.slots + i];
		if (s < 0) continue;
		const id = run.config.species[s].id;
		const px = x + run.x[sf * run.slots + i], py = y + run.y[sf * run.slots + i];
		if (id === 'M') out.push(<MetalBall key={i} x={px} y={py} r={11} />);
		else if (id === 'I') out.push(<MetalBall key={i} x={px} y={py} r={10} ion />);
		else if (id === 'W') out.push(<SmallWater key={i} x={px} y={py} r={7} rot={(i * 47 + sf * 2) % 360} />);
		else out.push(<circle key={i} cx={px} cy={py} r={8} fill={PINK_S} stroke={INK} strokeWidth={1.5} />);
	}
	return (
		<g>
			<rect x={x} y={y} width={run.config.w} height={run.config.h} rx={10} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			{out}
		</g>
	);
};
export const SceneCause: React.FC = () => {
	const f = useCurrentFrame();
	const sf = Math.max(0, Math.min(259, f - K7.fastest));
	const boxO = prog(f, K7.fastest, 12);
	const panelO = 1 - boxO;
	const R = (e: El) => 0.42 * e.r;
	const speeds = [44, 28, 16];
	const handAt = [K7.ion - 6, K7.water, K7.water + 22];
	const liR = runOf(0).reacted[0][sf];
	return (
		<SVG>
			<Heading text="Why the different speeds?" at={0} />
			{G3.map((e, i) => {
				const x = COLX(i);
				const n = runOf(i).reacted[0][sf];
				const ratio = liR >= 3 ? (n / liR).toFixed(1) : '…';
				return (
					<g key={e.sym}>
						<Sx x={x} y={232} text={e.sym} size={44} color={TEAL_OF[e.sym]} weight={800} at={-1000} />
						<Sx x={x + 70} y={232} text={`${ie(e)} kJ/mol`} size={44} color={OR_T} weight={800} at={K7.tightly + i * 6} />
						{panelO > 0.005 ? (
							<g opacity={panelO}>
								<rect x={x} y={PANEL.y} width={PANEL.w} height={PANEL.h} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={3} />
								<HandOff x={x} y={PANEL.y} w={PANEL.w} h={PANEL.h} e={e} R={R(e)} at={handAt[i]} speed={speeds[i]} ion={`${e.sym}^{+}`} />
							</g>
						) : null}
						{boxO > 0.005 ? (
							<g opacity={boxO}>
								<g transform={`translate(${x + (PANEL.w - BOX.w * BOX.s) / 2},${BOX.y}) scale(${BOX.s})`}><BoxView run={runOf(i)} x={0} y={0} sf={sf} /></g>
								<Readout x={x} y={630} w={PANEL.w} text={`reacted: ${n}`} size={52} color={INK} />
								<Readout x={x} y={726} w={PANEL.w} text={i === 0 ? 'rate: 1.0 × Li' : `rate: ${ratio} × Li`} size={52} color={TEAL_OF[e.sym]} />
							</g>
						) : null}
					</g>
				);
			})}
			{/* before the boxes */}
			<Fade at={K7.ion + 10} out={K7.fastest}>
				<Write x={96} y={700} text="one electron each" at={K7.ion + 10} size={42} color={E_BLUE} />
				<PenArrow a={[230, 668]} b={[300, 520]} at={K7.ion + 20} color={E_BLUE} bend={-0.2} width={5} head={16} />
			</Fade>
			<Fade at={-1000} out={K7.fastest}>
				<Sx x={676} y={700} text="2 Li + 2 H_2O → 2 Li^{+} + 2 OH^{−} + H_2" size={34} color={INK} weight={800} at={-1000} />
				<Sx x={676} y={746} text="same counts for Na and K" size={34} color={INK} weight={800} at={-1000} />
			</Fade>
			<Write x={676} y={830} text="easier to pull off →" at={K7.tightly + 20} out={K7.fastest} size={42} color={OR_T} />
			<PenArrow a={[400, 852]} b={[1700, 852]} at={K7.tightly + 30} out={K7.fastest} color={OR_S} bend={0} width={5} head={18} />
			{/* the boxes */}
			<PenRing cx={COLX(2) + PANEL.w / 2} cy={669} rx={292} ry={58} at={K7.fastest + 30} color={K_T} seed={8} />
			<Sx x={96} y={940} text="model: relative rates, not measured" size={30} color={INK} weight={800} at={K7.fastest} />
			<Readout x={COLX(1)} y={828} w={290} text={`melts ${mp(DATA.Na)} °C`} size={44} color={NA_T} at={K7.so} />
			<Readout x={COLX(2)} y={828} w={290} text={`melts ${mp(DATA.K)} °C`} size={44} color={K_T} at={K7.so + 8} />
			<PlateB p={TR_K} cx={COLX(2) + 430} bottom={920} h={ph(TR_WATER, 240)} at={K7.hydrogen} />
			<Sx x={1250} y={940} text={SRC_IE} size={26} color={INK} weight={700} at={K7.tightly} out={K7.hydrogen - 10} />
			{void K7.potassium}{void K7.heats}{void SRC_PHYS}
		</SVG>
	);
};

// ---------- the group 1 bars (scenes 8 and 9) ----------
const GC = {x: 96, y: 236, cw: 130, ch: 122};
const BX = 256, BK = 0.85;
const rowY = (i: number) => GC.y + i * GC.ch + 16;
const Bars: React.FC<{grow: number[]}> = ({grow}) => (
	<g>
		{G1.map((e, i) => (grow[i] > 0 ? <HBarV key={e.sym} x={BX} y={rowY(i)} lw={0} label="" v={ie(e)} k={BK} p={grow[i]} text={`${ie(e)} kJ/mol`} color={OR_S} fill={OR_F} tColor={OR_T} h={90} size={44} vSize={44} outline={false} /> : null))}
	</g>
);
const Unknown: React.FC<{i: number; o?: number}> = ({i, o = 1}) => (o > 0.005 ? (
	<g opacity={o}>
		<rect x={BX} y={rowY(i)} width={300} height={90} rx={6} fill="#fffdf8" stroke={INK} strokeWidth={3} strokeDasharray="12 8" />
		<Sx x={BX + 150} y={rowY(i) + 60} text="?" size={44} color={OR_T} anchor="middle" weight={800} at={-1000} />
	</g>
) : null);

// ---------- 8. prediction ----------
const K8 = cues(sc('prediction'), {rb: 'Rubidium comes', what: 'What would', where: 'Think about', think: ['think', 2]});
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	return (
		<SVG>
			<Heading text="Quick prediction" at={0} />
			<G1Col x={GC.x} y={GC.y} cw={GC.cw} ch={GC.ch} els={G1} hi={[0, 0, 0, 1, 0]} colors={[LI_T, NA_T, K_T, OR_S]} size={44} />
			<Bars grow={[1, 1, 1, 0, 0]} />
			<Unknown i={3} />
			<Sx x={BX} y={GC.y - 20} text="first ionisation energy" size={30} color={OR_T} weight={800} at={-1000} />
			<Chip x={1060} y={240} segs={[{t: 'Rb + water: what happens?'}]} at={0} size={44} color={INK} />
			<Write x={1060} y={420} text="where does its outer electron sit?" at={K8.where} size={44} color={E_BLUE} />
			<PicF p={TR_K} x={1300} y={510} h={ph(TR_WATER, 520)} />
			<Sx x={1560} y={820} text="potassium, last seen" size={34} color={K_T} anchor="middle" weight={800} at={-1000} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1130} y={650} r={64} ringFrom={K8.think} />
			{void K8.rb}{void K8.what}
		</SVG>
	);
};

// ---------- 9. rubidium and caesium ----------
const K9 = cues(sc('rubidium-caesium'), {even: 'Even more', further: 'even further', lower: 'lower again', explosively: 'react explosively', footage: 'video footage', cs: 'Caesium, below', trend: 'The trend'});
export const SceneRbCs: React.FC = () => {
	const f = useCurrentFrame();
	const glow = (i: number) => clamp01(prog(f, K9.trend + i * 6, 8));
	return (
		<SVG>
			<Heading text="Rubidium and caesium" at={0} />
			<G1Col x={GC.x} y={GC.y} cw={GC.cw} ch={GC.ch} els={G1} hi={[glow(0), glow(1), glow(2), Math.max(1 - prog(f, K9.trend, 8), glow(3)), glow(4)]} colors={[LI_T, NA_T, K_T, K_T, K_T]} size={44} />
			<Bars grow={[1, 1, 1, prog(f, K9.lower, 22), prog(f, K9.cs, 22)]} />
			<Unknown i={3} o={1 - prog(f, K9.lower, 10)} />
			<Unknown i={4} o={prog(f, K9.even, 10) * (1 - prog(f, K9.cs, 10))} />
			<Sx x={BX} y={GC.y - 20} text="first ionisation energy" size={30} color={OR_T} weight={800} at={-1000} />
			<Write x={BX + ie(DATA.Rb) * BK + 270} y={rowY(3) + 60} text="lower again" at={K9.lower + 16} size={42} color={OR_T} />
			<PenArrow a={[1130, 246]} b={[1130, 836]} at={K9.trend} color={K_T} bend={0} width={6} head={20} />
			<Write x={1150} y={880} text="more vigorous ↓" at={K9.trend + 8} size={42} color={K_T} />
			<Framed x={1170} y={330} segs={[{t: 'more violent', c: GREEN_T}]} at={K9.even} size={52} stroke={GREEN_T} />
			<Rich x={1170} y={440} segs={[{t: 'outer electron even further out'}]} size={38} at={K9.further} />
			<Rich x={1170} y={500} segs={[{t: 'Rb and Cs: '}, {t: 'react explosively', c: RED_T}]} size={38} at={K9.explosively} />
			<Rich x={1170} y={560} segs={[{t: 'Cs: more violent still'}]} size={38} at={K9.cs + 10} />
			<Chip x={1170} y={620} segs={[{t: 'Rb, Cs: secondary sources only'}]} at={K9.footage} size={38} color={GREEN_T} fill="#f2faf5" />
			<Sx x={1824} y={930} text={SRC_IE} size={26} color={INK} anchor="end" weight={700} at={-1000} />
		</SVG>
	);
};

// ---------- 10. a fair comparison ----------
const K10 = cues(sc('fair-comparison'), {bigger: 'bigger piece', more: 'more surface', warmer: 'Warmer water', size: 'same size', amount: 'same amount', temp: 'same temperature', fresh: 'freshly cut', surf: ['surface', 2], change: 'Change those', without: 'without changing'});
const T10: TL = {x: 1012, y: 252, w: 760};
const CHECK = ['same size of piece', 'same volume of water', 'same temperature', 'fresh surface'];
export const SceneFair: React.FC = () => {
	const f = useCurrentFrame();
	const ticks = [K10.size, K10.amount, K10.temp, K10.fresh];
	const glow = prog(f, K10.surf, 10);
	const chipW = richW([{t: "the metal's reactivity is the same"}], 44, false, 700) + 44 * 1.1;
	const [nx, ny] = tp(T10, PT.na);
	return (
		<SVG>
			<Heading text="A fair comparison" at={0} />
			{/* two pieces on coded water */}
			<rect x={96} y={380} width={804} height={110} rx={12} fill="#d6e8f3" stroke={INK} strokeWidth={3} />
			<rect x={300 - 9} y={372} width={18} height={12} rx={3} fill="#a9aeb5" stroke={INK} strokeWidth={2.5} />
			<rect x={640 - 30} y={362} width={60} height={30} rx={5} fill="#a9aeb5" stroke={INK} strokeWidth={2.5} />
			<Bubbles x={300} y={370} at={-200} every={9} spread={8} rise={1.3} size={4} />
			<Bubbles x={640} y={358} at={-200} every={2} spread={30} rise={1.6} size={4} />
			<Sx x={300} y={540} text="small piece" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={640} y={540} text="bigger piece" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Write x={560} y={250} text="more surface, faster" at={K10.more} size={42} color={NA_T} />
			<PenArrow a={[700, 262]} b={[655, 350]} at={K10.more + 10} color={NA_T} bend={0.2} width={5} head={16} />
			<Readout x={96} y={576} w={170} text="20 °C" size={38} color={INK} at={K10.warmer} />
			<Readout x={290} y={576} w={170} text="40 °C" size={38} color={RED_T} at={K10.warmer + 8} />
			<Rich x={490} y={622} segs={[{t: 'warmer: faster'}]} size={38} at={K10.warmer + 14} />
			{/* checklist */}
			<rect x={96} y={680} width={804} height={250} rx={18} fill="#fffdf8" stroke={TEAL_OF.Li} strokeWidth={4} />
			{glow > 0.005 ? <rect x={110} y={680 + 22 + 3 * 54} width={776} height={50} rx={10} fill="#d6eeee" opacity={glow} /> : null}
			{CHECK.map((t, i) => (
				<g key={t}>
					<Sx x={170} y={740 + i * 54} text={t} size={38} color={INK} weight={800} at={-1000} />
					<DrawPath d={`M${122},${728 + i * 54} L${134},${741 + i * 54} L${156},${712 + i * 54}`} at={ticks[i]} dur={10} color={GREEN_T} width={6} />
				</g>
			))}
			{/* the trough clip, right */}
			<TroughStates t={T10} states={[{p: TR_NA, at: -1000}]} />
			<ClipFrame x={980} y={228} w={844} h={470} at={-200} run={900} />
			<Bubbles x={nx} y={ny - 6} at={-200} every={2} spread={18} rise={1.5} size={3.5} />
			<Rich x={980} y={772} segs={[{t: 'conditions change the speed you see'}]} size={38} at={K10.change} />
			<Chip x={980} y={804} segs={[{t: "the metal's reactivity is the same"}]} at={K10.without} size={44} color={INK} />
			<DrawPath d={`M${1004},${884} L${980 + chipW - 24},${884}`} at={K10.without + 12} dur={14} color={K_T} width={6} />
			{void K10.bigger}
		</SVG>
	);
};

// ---------- 11. surface films ----------
const K11 = cues(sc('surface-films'), {react: 'react with oxygen', tarnish: 'called tarnish', surface: ['surface', 1], oil: 'kept under oil', cut: 'Cut sodium', dull: 'goes dull', separates: 'separates', slow: 'A slow start', doesnt: "doesn't mean"});
const T11: TL = {x: 96, y: 300, w: 760};
const cutP = (u: number, v: number): [number, number] => [T11.x + (u - CUT_FRESH.box[0]) * (T11.w / CUT_FRESH.box[2]), T11.y + (v - CUT_FRESH.box[1]) * (T11.w / CUT_FRESH.box[2])];
export const SceneFilms: React.FC = () => {
	const f = useCurrentFrame();
	const mins = Math.round(5 * clamp01((f - K11.dull) / 70));
	const ins = {x: 1000, y: 280, w: 824, h: 330};
	const top = cutP(724, 394), face = cutP(880, 580);
	return (
		<SVG>
			<Heading text="Surface films" at={0} />
			<TroughStates t={T11} states={[{p: CUT_FRESH, at: -1000}, {p: CUT_DULL, at: K11.dull, d: 70}]} />
			<Rich x={96} y={250} segs={[{t: 'Alkali metals react with oxygen and water vapour in air.'}]} size={38} at={0} />
			<Sx x={96} y={884} text="tarnish: a film formed by reaction with air" size={34} color={INK} weight={800} at={K11.surface} />
			<Write x={96} y={318} text="tarnish" at={K11.tarnish} size={42} color={INK} />
			<PenArrow a={[230, 306]} b={[top[0] - 30, top[1] - 6]} at={K11.tarnish + 8} color={INK} bend={-0.2} width={5} head={16} />
			<Write x={face[0] + 150} y={face[1] + 10} text="fresh face: shiny" at={K11.cut + 10} out={K11.dull} size={42} color={NA_T} />
			<PenArrow a={[face[0] + 140, face[1] - 4]} b={[face[0] + 20, face[1] - 10]} at={K11.cut + 20} out={K11.dull} color={NA_T} bend={0.1} width={5} head={16} />
			<Readout x={96} y={736} w={460} text={`time in air: ${f >= K11.dull ? mins : 0} min`} size={44} color={INK} />
			<Write x={590} y={790} text="dull within minutes" at={K11.dull + 30} size={42} color={INK} />
			{/* right: the oil jar, then the film inset */}
			<PlateB p={OILJAR} cx={1410} bottom={720} h={450} out={K11.separates - 14} />
			<Write x={1410} y={790} text="kept under oil" at={K11.oil} out={K11.separates - 14} size={42} color={GREEN_T} anchor="middle" />
			<Fade at={K11.separates}>
				<rect x={ins.x} y={ins.y} width={ins.w} height={ins.h} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={3} />
				<rect x={ins.x + 30} y={ins.y + 40} width={520} height={110} fill="#a9aeb5" stroke={INK} strokeWidth={3} />
				<rect x={ins.x + 30} y={ins.y + 150} width={520} height={30} fill="#e9e6df" stroke={INK} strokeWidth={3} />
				<rect x={ins.x + 30} y={ins.y + 180} width={520} height={120} fill="#bcd9ee" stroke={INK} strokeWidth={3} />
				<Sx x={ins.x + 60} y={ins.y + 108} text="metal" size={34} color={INK} weight={800} at={-1000} />
				<Sx x={ins.x + 60} y={ins.y + 258} text="water" size={34} color={INK} weight={800} at={-1000} />
				<Sx x={ins.x + 600} y={ins.y + 178} text="tarnish film" size={34} color={INK} weight={800} at={-1000} />
			</Fade>
			<Bracket a={[ins.x + 562, ins.y + 146]} b={[ins.x + 562, ins.y + 184]} at={K11.separates + 10} color={INK} depth={-14} />
			<Sx x={ins.x} y={ins.y + ins.h + 44} text="film: water can't reach the metal at first" size={34} color={INK} weight={800} at={K11.separates + 16} />
			<Chip x={1000} y={720} segs={[{t: 'slow start = less reactive metal'}]} at={K11.slow} size={44} color={RED_T} strike={K11.doesnt} />
			<Write x={1000} y={860} text="the surface, not the metal" at={K11.doesnt + 10} size={42} color={RED_T} />
			<Sx x={96} y={936} text="aluminium's oxide layer: a later example" size={30} color={INK} weight={800} at={K11.separates + 40} />
			{void K11.react}{void Chip}
		</SVG>
	);
};

// ---------- 12. one line to remember ----------
const K12 = cues(sc('memory-line'), {further: ['further', 1], easier: ['easier', 1], faster: ['faster', 1], fo: ['Further out', 2], eo: ['easier off', 1], ff: 'faster fizz'});
export const SceneMemoryLine: React.FC = () => {
	const f = useCurrentFrame();
	const li = DATA.Li, k = DATA.K;
	const rot = -Math.PI / 4;
	const atom = (e: El, cx: number, cy: number, R: number, at: number) => {
		const p = prog(f, at, 24);
		const e0: [number, number] = [cx + R * Math.cos(rot), cy + R * Math.sin(rot)];
		const to: [number, number] = [e0[0] + 50, e0[1] - 50];
		return <RAtom cx={cx} cy={cy} rings={ringsOf(e.shells.length, R)} counts={e.shells} label={`${e.z}+`} nr={14} dot={6} labelSize={18} outerRot={rot} leave={{to, p}} ringStroke={2.5} />;
	};
	return (
		<SVG>
			<Heading text="One line to remember" at={0} />
			<Sx x={96} y={232} text="group 1: first ionisation energy" size={30} color={OR_T} weight={800} at={-1000} />
			{G1.map((e, i) => <HBarV key={e.sym} x={96} y={260 + i * 100} lw={80} label={e.sym} v={ie(e)} k={0.72} p={1} text={`${ie(e)}`} color={OR_S} fill={OR_F} tColor={OR_T} h={64} size={44} vSize={34} outline={false} />)}
			{atom(li, 790, 300, 46, K12.easier)}
			{atom(k, 790, 560, 70, K12.easier + 8)}
			<rect x={960} y={210} width={864} height={680} rx={22} fill="#fffdf8" stroke="#24407a" strokeWidth={5} />
			<Sx x={990} y={254} text="the chain" size={30} color={INK} weight={800} at={-1000} />
			<Rich x={990} y={320} segs={[{t: 'outer electron ', c: INK}, {t: 'further out', c: E_BLUE}]} size={44} at={K12.further} />
			<Rich x={990} y={390} segs={[{t: '→ '}, {t: 'easier to remove', c: OR_T}]} size={44} at={K12.easier} />
			<Rich x={990} y={460} segs={[{t: '→ '}, {t: 'faster reaction', c: K_T}]} size={44} at={K12.faster} />
			<line x1={990} y1={510} x2={1794} y2={510} stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			<Sx x={990} y={556} text="memory aid" size={30} color={INK} hand at={-1000} />
			<Write x={1010} y={640} text="Further out," at={K12.fo} size={64} color={E_BLUE} />
			<Write x={1010} y={730} text="easier off," at={K12.eo} size={64} color={OR_T} />
			<Write x={1010} y={820} text="faster fizz." at={K12.ff} size={64} color={K_T} />
		</SVG>
	);
};
void TR_LI; void PINK_S;
