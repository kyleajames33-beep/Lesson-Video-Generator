// Y11 Chem M1 V15 scenes 1 to 5: V14's final frame (group 1 ionisation-energy bars, "easier to lose the outer
// electron", the trough of water with a "?") opening into the lithium and potassium states of the same trough; the
// safety board (oil jar, teacher demonstration or video only, the "illustrated clip" frame); then the clip stage,
// where a coded piece drops into the aligned trough set for lithium, sodium and potassium in turn (bubbles at each
// metal's rate, the pink indicator spread) while the observation card grows.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {SceneHandoff as V14Handoff, TROUGH15} from '../chem-y11-m1-v14/s3';
import {dur as v14dur} from '../chem-y11-m1-v14/common';
import {DATA, G1, G3, OILJAR, PT, TR_K, TR_LI, TR_NA, TR_WATER, ie, mp, ph, rho, sc, th, tp} from './common';
import type {TL} from './common';
import {
	Bubbles, Chip, ClipFrame, Fade, G1Col, GREEN_T, HBarV, Heading, INK, K_T, LI_T, NAVY_T, NA_T, OR_F, OR_S, OR_T, PINK_T, PenArrow, PenRing, Piece, PinkSpread,
	PlateB, Readout, Rich, SVG, Sparks, Sx, TroughStates, Write, lerp, prog, richW, smooth,
} from './parts';

// ---------- 1. hook ----------
const K1 = cues(sc('hook'), {now: 'Now', lithium: 'Lithium', alkali: 'alkali metals', same: 'same products', drop: 'drop them', calmly: 'fizzes calmly', flame: 'bursts into flame', so: 'So why', water2: ['water', 2]});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const g = smooth(prog(f, K1.now, 30));
	const W = lerp(TROUGH15.w, 900, g), CX = lerp(TROUGH15.cx, 1350, g), BOT = lerp(TROUGH15.bottom, 920, g);
	const T: TL = {x: CX - W / 2, y: BOT - ph(TR_WATER, W), w: W};
	const li = tp(T, PT.li), kb = tp(T, PT.k), fl = tp(T, PT.flame);
	const hiCol = prog(f, K1.lithium, 12);
	return (
		<SVG>
			{/* V14's final board, redrawn so its parts can change (identical at frame 0) */}
			<Heading text="Ionisation energy and electronegativity" at={-1000} out={K1.so - 12} />
			<Heading text="Group 1 metals and water: why so different?" at={K1.so} />
			<Chip x={96} y={178} segs={[{t: 'Next: why do Group 1 metals react differently with water?'}]} at={-1000} out={K1.now} size={38} color={NAVY_T} />
			<Sx x={96} y={302} text="group 1: first ionisation energy" size={30} color={OR_T} weight={800} at={-1000} />
			{G3.map((x, i) => <HBarV key={x.sym} x={96} y={330 + i * 110} lw={90} label={x.sym} v={ie(x)} k={0.85} p={1} text={`${ie(x)} kJ/mol`} color={OR_S} fill={OR_F} tColor={OR_T} h={70} size={44} outline={false} />)}
			<PenArrow a={[880, 340]} b={[880, 620]} at={-1000} color={OR_S} bend={0} width={7} head={22} />
			<Write x={96} y={720} text="easier to lose the outer electron" at={-1000} size={42} color={OR_T} />
			<TroughStates t={T} states={[{p: TR_WATER, at: -1000}, {p: TR_LI, at: K1.calmly - 6}, {p: TR_K, at: K1.flame}, {p: TR_WATER, at: K1.water2 - 6, d: 14}]} />
			<Write x={TROUGH15.cx} y={660} text="?" at={-1000} out={K1.now} size={140} color={INK} anchor="middle" />
			{/* V14's frame itself, frozen on top for the first frames, fades out with no visible change */}
			{f < 34 ? <Fade at={-1000} out={4} d={26}><Freeze frame={v14dur('handoff') - 1}><V14Handoff /></Freeze></Fade> : null}
			{/* the group 1 column (top right) */}
			<Fade at={K1.now}>
				<G1Col x={1716} y={196} cw={100} ch={52} els={G1} hi={[hiCol, hiCol, hiCol, 0, 0]} colors={[LI_T, NA_T, K_T]} size={32} />
			</Fade>
			<Write x={1690} y={300} text="alkali metals:" at={K1.alkali} size={38} color={INK} anchor="end" />
			<Write x={1690} y={350} text="1 outer electron" at={K1.alkali + 14} size={38} color={INK} anchor="end" />
			<Rich x={96} y={800} segs={[{t: 'Li, Na, K: all Group 1 metals'}]} size={44} at={K1.lithium} />
			<Rich x={96} y={870} segs={[{t: 'metal + water → '}, {t: 'same products'}]} size={44} at={K1.same} />
			<Rich x={96} y={938} segs={[{t: 'Li: ', c: LI_T}, {t: 'calm fizz', c: LI_T}]} size={44} at={K1.calmly} />
			<Rich x={460} y={938} segs={[{t: 'K: ', c: K_T}, {t: 'flame', c: K_T}]} size={44} at={K1.flame} />
			{/* the two states */}
			<Bubbles x={li[0]} y={li[1] - 4} at={K1.calmly} until={K1.flame} every={7} spread={10} rise={1.2} size={3.5} />
			<Write x={li[0]} y={li[1] - 60} text="calm" at={K1.calmly + 8} out={K1.flame} size={42} color={LI_T} anchor="middle" />
			<Bubbles x={kb[0]} y={kb[1] - 4} at={K1.flame + 6} until={K1.water2 - 10} every={1} spread={26} rise={2.2} size={3.5} />
			<PenRing cx={fl[0]} cy={fl[1] + 4} rx={42} ry={52} at={K1.flame + 12} out={K1.water2 - 6} color={K_T} seed={5} />
			<Write x={fl[0] + 60} y={fl[1] - 26} text="flame!" at={K1.flame + 16} out={K1.water2 - 6} size={42} color={K_T} />
		</SVG>
	);
};

// ---------- 2. safety ----------
const K2 = cues(sc('safety'), {wont: "won't handle", react: 'They react', stored: 'stored under oil', teacher: 'teacher demonstration', clips: 'short video', rb: 'Rubidium'});
const T2: TL = {x: 1012, y: 384, w: 760};
export const SceneSafety: React.FC = () => {
	const f = useCurrentFrame();
	const draw = prog(f, K2.clips, 24);
	return (
		<SVG>
			<Heading text="First, safety" at={0} />
			<Rich x={96} y={252} segs={[{t: 'Students never handle alkali metals.'}]} size={44} at={K2.wont} />
			<Rich x={96} y={312} segs={[{t: 'They react with the moisture on skin.'}]} size={38} at={K2.react} />
			<PlateB p={OILJAR} cx={420} bottom={910} h={460} />
			<Write x={96} y={404} text="under oil, never touched" at={K2.stored} size={42} color={GREEN_T} />
			<PenArrow a={[640, 420]} b={[628, 640]} at={K2.stored + 16} color={GREEN_T} bend={-0.25} width={5} head={18} />
			<Chip x={980} y={226} segs={[{t: 'teacher demonstration or video only'}]} at={K2.teacher} size={44} color={GREEN_T} fill="#f2faf5" />
			<TroughStates t={T2} states={[{p: TR_WATER, at: -1000}, {p: TR_LI, at: K2.clips + 20}]} />
			<ClipFrame x={968} y={364} w={856} h={470} at={K2.clips + 20} run={400} draw={draw} />
			<Sx x={1824} y={352} text="illustrated clip" size={30} color={INK} anchor="end" weight={800} at={K2.clips + 10} />
			<Bubbles x={tp(T2, PT.li)[0]} y={tp(T2, PT.li)[1] - 4} at={K2.clips + 34} every={7} spread={9} rise={1.1} size={3} />
			<Chip x={980} y={870} segs={[{t: 'Rb, Cs: videos only'}]} at={K2.rb + 30} size={38} color={GREEN_T} fill="#f2faf5" />
		</SVG>
	);
};

// ---------- the clip stage (scenes 3 to 5) ----------
const TC: TL = {x: 130, y: 250, w: 940};
const CF = {x: 96, y: 215, w: 1008, h: 690};
const CARD = {x: 1140, y: 215, w: 684, h: 690};
const OBS: {e: typeof DATA.Li; l1: string; l2: string; c: string}[] = [
	{e: DATA.Li, l1: 'floats, steady fizz,', l2: 'no melting', c: LI_T},
	{e: DATA.Na, l1: 'melts, darts about,', l2: 'fast fizz', c: NA_T},
	{e: DATA.K, l1: 'melts at once,', l2: 'hydrogen burns, lilac', c: K_T},
];
/** The clip frame, its tag and the observation card with the lines written so far (at: frame per line, or -1000). */
const Stage: React.FC<{lines: number[]; hi: number; children: React.ReactNode}> = ({lines, hi, children}) => (
	<g>
		<ClipFrame x={CF.x} y={CF.y} w={CF.w} h={CF.h} at={-200} run={2200} />
		<Sx x={CF.x + CF.w} y={935} text="illustrated clip" size={30} color={INK} anchor="end" weight={800} at={-1000} />
		<rect x={CARD.x} y={CARD.y} width={CARD.w} height={CARD.h} rx={22} fill="#fffdf8" stroke={INK} strokeWidth={3} />
		<Sx x={CARD.x + 30} y={CARD.y + 44} text="observations" size={30} color={INK} weight={800} at={-1000} />
		<Readout x={CARD.x + 30} y={262} w={500} text={OBS[hi].e.name} size={44} color={OBS[hi].c} />
		<G1Col x={1716} y={236} cw={84} ch={46} els={G1} hi={[0, 1, 2].map(i => (i === hi ? 1 : 0)).concat([0, 0])} colors={[LI_T, NA_T, K_T]} size={28} />
		{OBS.map((o, i) => (o ? (
			<g key={o.e.sym}>
				<Sx x={CARD.x + 30} y={530 + i * 106} text={o.e.sym + ':'} size={38} color={o.c} weight={800} at={-1000} />
				<Rich x={CARD.x + 30 + richW([{t: o.e.sym + ': '}], 38)} y={530 + i * 106} segs={[{t: o.l1, c: o.c}]} size={38} at={lines[i] ?? 99999} />
				<Rich x={CARD.x + 30} y={574 + i * 106} segs={[{t: o.l2, c: o.c}]} size={38} at={(lines[i] ?? 99999) + 10} />
			</g>
		) : null))}
		{children}
	</g>
);
const FIZZ = {x: CARD.x + 30, y: 356, w: 500};

// ---------- 3. lithium ----------
const K3 = cues(sc('lithium'), {here: "Here's lithium", dense: 'least dense', floats: 'so it floats', fizzes: 'fizzes steadily', melt: "doesn't melt", few: 'A few', pink: 'turn pink'});
export const SceneLithium: React.FC = () => {
	const [px, py] = tp(TC, PT.li);
	const land = K3.here + 2 + 14;
	return (
		<SVG>
			<Heading text="Lithium: a steady fizz" at={0} />
			<Stage lines={[K3.melt + 20]} hi={0}>
				<TroughStates t={TC} states={[{p: TR_WATER, at: -1000}, {p: TR_LI, at: land + 2}]} />
				<Piece x={px} y={py} at={K3.here + 2} out={land + 16} s={1.3} />
				<PinkSpread t={TC} from={PT.li} at={K3.few + 10} d={110} R={190} id="v15p3" strength={0.45} />
				<Bubbles x={px} y={py - 6} at={land + 4} every={7} spread={12} rise={1.3} size={4} />
				<Write x={330} y={322} text="floats" at={K3.floats} size={42} color={LI_T} />
				<PenArrow a={[460, 316]} b={[px - 18, py - 14]} at={K3.floats + 8} color={LI_T} bend={-0.2} width={5} head={16} />
				<Readout x={FIZZ.x} y={FIZZ.y} w={FIZZ.w} text="fizz: steady" size={44} color={LI_T} at={K3.fizzes} />
				<Sx x={150} y={780} text={`least dense metal: floats (${rho(DATA.Li)} g/cm^{3})`} size={34} color={INK} weight={800} at={K3.dense} />
				<Sx x={150} y={830} text={`solid throughout (melts at ${mp(DATA.Li)} °C)`} size={34} color={INK} weight={800} at={K3.melt} />
				<PenRing cx={px} cy={py + 34} rx={150} ry={58} at={K3.pink} color={PINK_T} seed={7} />
				<Write x={px} y={py + 150} text="pink: alkali forming" at={K3.pink + 8} size={42} color={PINK_T} anchor="middle" />
			</Stage>
		</SVG>
	);
};

// ---------- 4. sodium ----------
const K4 = cues(sc('sodium'), {now: 'Now sodium', floats: 'floats too', faster: 'is faster', shiny: 'shiny silver', heat: 'gives out heat', ninety: 'ninety-eight', still: 'held still', flame: 'yellow-orange flame', pink: 'pink spreads', quickly: 'much more quickly'});
/** Coded flame: a teardrop of the given colours above (x, y). */
const CodedFlame: React.FC<{x: number; y: number; s: number; outer: string; inner: string; f: number}> = ({x, y, s, outer, inner, f}) => {
	const w = 1 + 0.06 * Math.sin(f * 0.6);
	const d = (k: number) => `M${x},${y} C${x - 28 * s * k * w},${y - 20 * s * k} ${x - 14 * s * k},${y - 70 * s * k} ${x},${y - 96 * s * k} C${x + 14 * s * k},${y - 70 * s * k} ${x + 28 * s * k * w},${y - 20 * s * k} ${x},${y} Z`;
	return (
		<g>
			<path d={d(1)} fill={outer} stroke={INK} strokeWidth={2.5} />
			<path d={d(0.55)} fill={inner} />
		</g>
	);
};
export const SceneSodium: React.FC = () => {
	const f = useCurrentFrame();
	const [px, py] = tp(TC, PT.na);
	const [lx, ly] = tp(TC, PT.li);
	const land = K4.now + 2 + 14;
	const wakeA = tp(TC, [400, 492]), wakeB = tp(TC, [672, 470]);
	const IN = {x: 790, y: 470, w: 260, h: 230};
	return (
		<SVG>
			<Heading text="Sodium: a racing silver ball" at={0} />
			<Stage lines={[-1000, K4.heat]} hi={1}>
				<TroughStates t={TC} states={[{p: TR_LI, at: -1000}, {p: TR_WATER, at: 0, d: 14}, {p: TR_NA, at: K4.floats, d: 18}]} />
				<Bubbles x={lx} y={ly - 6} at={-60} until={0} every={7} spread={12} rise={1.3} size={4} o={1 - prog(f, 0, 12)} />
				<Piece x={px} y={py} at={K4.now + 2} out={K4.floats + 14} s={1.3} />
				<Bubbles x={px} y={py - 8} at={K4.floats + 6} every={2} spread={22} rise={1.8} size={4} />
				<Readout x={FIZZ.x} y={FIZZ.y} w={FIZZ.w} text="fizz: steady" size={44} color={LI_T} at={-1000} out={K4.faster} />
				<Readout x={FIZZ.x} y={FIZZ.y} w={FIZZ.w} text="fizz: fast" size={44} color={NA_T} at={K4.faster + 6} />
				<PenArrow a={wakeA} b={[wakeB[0] - 6, wakeB[1]]} at={K4.shiny} color={NA_T} bend={0.18} width={5} head={16} />
				<Write x={200} y={350} text="melted: a ball" at={K4.shiny + 6} size={42} color={NA_T} />
				<Sx x={150} y={800} text={`melts at ${mp(DATA.Na)} °C`} size={38} color={INK} weight={800} at={K4.ninety} />
				{/* the held-still inset */}
				<Fade at={K4.flame - 30}>
					<rect x={IN.x} y={IN.y} width={IN.w} height={IN.h} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={3} strokeDasharray="12 8" />
					<rect x={IN.x + 20} y={IN.y + 150} width={IN.w - 40} height={34} rx={8} fill="#cfe3f0" />
					<CodedFlame x={IN.x + IN.w / 2} y={IN.y + 146} s={1.05} outer="#f2a53a" inner="#ffd76a" f={f} />
					<circle cx={IN.x + IN.w / 2} cy={IN.y + 150} r={15} fill="#d9dde2" stroke={INK} strokeWidth={2.5} />
					<Sx x={IN.x + IN.w / 2} y={IN.y + IN.h + 40} text="if held still" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
				</Fade>
				<PinkSpread t={TC} from={PT.na} at={K4.pink} d={36} R={380} id="v15p4" strength={0.5} />
				<Write x={330} y={640} text="pink, fast" at={K4.quickly} size={42} color={PINK_T} />
				{void smooth}
			</Stage>
		</SVG>
	);
};

// ---------- 5. potassium ----------
const K5 = cues(sc('potassium'), {and: 'And potassium', melts: 'It melts', once: 'at once', fire: 'catches fire', lilac: 'lilac flame', crackles: 'crackles', vigorous: 'most vigorous'});
export const ScenePotassium: React.FC = () => {
	const f = useCurrentFrame();
	const [px, py] = tp(TC, PT.k);
	const [nx, ny] = tp(TC, PT.na);
	const fl = tp(TC, PT.flame);
	const land = K5.and + 2 + 14;
	return (
		<SVG>
			<Heading text="Potassium: instant flame" at={0} />
			<Stage lines={[-1000, -1000, K5.lilac + 30]} hi={2}>
				<TroughStates t={TC} states={[{p: TR_NA, at: -1000}, {p: TR_WATER, at: 0, d: 14}, {p: TR_K, at: K5.melts, d: 16}]} />
				<Bubbles x={nx} y={ny - 8} at={-60} until={0} every={2} spread={22} rise={1.8} size={4} o={1 - prog(f, 0, 12)} />
				<Piece x={px} y={py} at={K5.and + 2} out={K5.melts + 12} s={1.3} />
				<Bubbles x={px} y={py - 8} at={K5.melts + 4} every={1} spread={34} rise={2.4} size={4.5} />
				<Readout x={FIZZ.x} y={FIZZ.y} w={FIZZ.w} text="fizz: fast" size={44} color={NA_T} at={-1000} out={K5.fire} />
				<Readout x={FIZZ.x} y={FIZZ.y} w={FIZZ.w} text="fizz: violent" size={44} color={K_T} at={K5.fire + 6} />
				<Sx x={150} y={800} text={`melts at ${mp(DATA.K)} °C`} size={38} color={INK} weight={800} at={K5.once} />
				<PenRing cx={fl[0]} cy={fl[1] + 6} rx={58} ry={70} at={K5.lilac} color={K_T} seed={5} />
				<Write x={fl[0] + 84} y={fl[1] - 30} text="hydrogen burning" at={K5.lilac + 10} size={42} color={K_T} />
				<Sparks x={px} y={py - 6} at={K5.crackles} s={1.3} />
				<PenArrow a={[1790, 520]} b={[1790, 820]} at={K5.vigorous} color={K_T} bend={0} width={6} head={20} />
				<Write x={CARD.x + 30} y={870} text="more vigorous ↓" at={K5.vigorous + 10} size={42} color={K_T} />
			</Stage>
		</SVG>
	);
};
void G3;
