// M7 C04a scenes 4 to 7: the four reagents, one equation stage strip each (alkene; + reagent; the arrow, conditions
// written on and under it; the product, with the reagent's pieces flying in one per carbon). Hydrogenation (the
// catalyst goes on the arrow), halogenation (halogen naming; bromine water loses its colour), hydrogen halides (two
// different pieces; no locant) and hydration (four conditions; why the pressure is high). The conditions card fills one
// row per scene, small at the right.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {DrawPath, INK, INK_SOFT, Overlay, Sx, TEAL, mw, smooth} from '../chem-m6-c01/parts';
import {AnswerChip, Locants, NameBuilder, RuleChip, Tag, slotCharX} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {BOTTLE, BRW, OIL, TUB, sc} from './common';
import {BROM, CARD_ROWS, CT, CondCard, Gauge, Mol2D, Plus, PlateC, RxArrow, apt, cmol, diat, dimAt, loc, pulseAt, vis, water2} from './parts';
import type {Fly, SMol} from './parts';

// ---------- the strip layout (shared by scenes 4 to 7) ----------
export const S = {y: 520, s: 1.25, ex: 230, px: 440, rx: 590, a1: 730, a2: 1010, prx: 1270};
export const ETHENE = cmol([{ul: 'H', dl: 'H'}, {ur: 'H', dr: 'H'}], [2]);
/** Product flies: each new atom of the product flies in from a reagent atom (reagent at rx, product at prx). */
export const fliesFrom = (rg: SMol, pr: SMol, pairs: [number, number, number][], rx = S.rx, prx = S.prx, y = S.y): Record<number, Fly> =>
	Object.fromEntries(pairs.map(([ri, pi, at]) => [pi, {from: loc(apt(rg, ri, rx, y, S.s), prx, y, S.s), at, dur: 26}]));
/** Conditions card at the right: rows up to `upto` (earlier rows dim), the newest row writing on at `fill`. */
export const SmallCard: React.FC<{upto: number; fill: number; at?: number; rows?: string[]; right?: number; y?: number; size?: number; lit?: number[]}> = ({upto, fill, at, rows = CARD_ROWS, right = 1880, y = 790, size = 24, lit = []}) => {
	const w = Math.max(...rows.map(t => mw(t, size, false, 600))) + 48;
	return <CondCard x={right - w} y={y} w={w} at={at ?? (upto === 0 ? fill - 6 : 0)} size={size} rows={rows.slice(0, upto + 1).map((t, i) => (i < upto ? {t, o: 0.5, fill: lit[i]} : {t, at: fill, fill}))} />;
};
const BW: [number, number, number] = [300, 130, 140];
const BXX = 230, BYY = 760;

// ---------- 4. Hydrogen: hydrogenation ----------
const K4 = cues(sc('hydrogenation'), {now: 'Now the four', first: 'First, hydrogen', ethene: 'Ethene plus', h2: 'H two', gives: 'gives ethane', each: 'one hydrogen on', product: 'The product has', sat: 'saturated', barely: 'Hydrogen barely', nickel: 'nickel', about: 'about one hundred', write: 'we write', module: 'From Module', soit: 'so it goes', arrow: ['arrow', 2], hydro: 'This is hydrogenation', hardens: 'hardens'});
const H2 = diat('H', 'H', 80);
const ETHANE_H = cmol([{l: 'H', u: 'H*', d: 'H'}, {u: 'H*', d: 'H', r: 'H'}]);
export const SceneHydrogenation: React.FC = () => {
	const f = useCurrentFrame();
	const fl = fliesFrom(H2, ETHANE_H, [[0, ETHANE_H.k['0u'], K4.each], [1, ETHANE_H.k['1u'], K4.each + 8]]);
	const gx = smooth(prog(f, K4.arrow + 6, 24));
	const ghost: V2 = [440 + (870 - 440) * gx, 660 + (470 - 660) * gx];
	const cardAt = K4.hardens + 50;
	return (
		<Overlay>
			<RuleChip text="Reagent 1 of 4: H_2" at={K4.first} />
			<Sx x={96} y={240} text="four reagents, one at a time" size={32} color={INK_SOFT} hand at={K4.now} out={K4.first} />
			<Mol2D m={ETHENE} x={S.ex} y={S.y} s={S.s} at={K4.ethene} />
			<Plus x={S.px} y={S.y} at={K4.h2} />
			<Mol2D m={H2} x={S.rx} y={S.y} s={S.s} at={K4.h2} />
			<RxArrow x1={S.a1} x2={S.a2} y={S.y} at={K4.gives} above={[{t: 'Ni catalyst', at: K4.nickel}]} below={[{t: 'about 150 °C', at: K4.about}]} />
			<Mol2D m={ETHANE_H} x={S.prx} y={S.y} s={S.s} at={K4.gives + 6} fly={fl} glow={{[ETHANE_H.k['0u']]: [K4.each + 20, K4.sat], [ETHANE_H.k['1u']]: [K4.each + 28, K4.sat]}} />
			<Tag x={S.prx} y={668} text="one H on each carbon" at={K4.each + 20} out={K4.product} size={28} anchor="middle" />
			<Tag x={S.prx} y={668} text="no C=C left: saturated" at={K4.sat} size={28} anchor="middle" o={dimAt(f, K4.barely, 0)} />
			<Tag x={870} y={720} text="from Module 5" at={K4.module} out={K4.hydro} size={24} anchor="middle" />
			<g opacity={vis(f, K4.soit, K4.arrow + 34)}>
				<Sx x={ghost[0]} y={ghost[1] + 14} text="Ni" size={40} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
				<DrawPath d={`M${420},${635} L${462},${678}`} at={K4.arrow} dur={8} color="#c4432f" width={6} />
				<DrawPath d={`M${462},${635} L${420},${678}`} at={K4.arrow + 5} dur={8} color="#c4432f" width={6} />
			</g>
			<Tag x={870} y={780} text="catalyst: not used up, so on the arrow" at={K4.arrow} out={K4.hydro + 30} size={28} color={TEAL} fill="#dff2ef" anchor="middle" />
			<Tag x={620} y={860} text="hydrogenation: + H_2" at={K4.hydro} size={32} color={INK} fill="#fffdf8" anchor="middle" o={dimAt(f, cardAt - 14, 0.4)} />
			<g opacity={vis(f, K4.hardens, K4.hardens + 50)}>
				<PlateC p={OIL} cx={1800} top={250} h={200} />
				<PlateC p={TUB} cx={1800} top={480} h={100} />
			</g>
			<SmallCard upto={0} fill={cardAt} />
			{void K4.write}
		</Overlay>
	);
};

// ---------- 5. Halogens: halogenation, and bromine water ----------
const K5 = cues(sc('halogenation'), {second: 'Second, a halogen', x2: 'X two', ethene: 'Ethene plus bromine', puts: 'puts one bromine', name: 'A halogen in a name', prefix: 'a prefix with', number: 'number', so: 'So this is', dibromo: 'two-dibromoethane', chlorine: 'Chlorine works', dichloro: 'two-dichloroethane', nocat: 'No catalyst', room: 'room temperature', bw: 'Bromine water is', orange: 'orange', when: 'When an alkene', dis: 'disappears', quick: 'quick test', prac: 'practical video'});
const BR2 = diat('Br', 'Br', 96);
const DBE = cmol([{l: 'H', u: 'Br*', d: 'H'}, {u: 'Br*', d: 'H', r: 'H'}]);
export const SceneHalogen: React.FC = () => {
	const f = useCurrentFrame();
	const fl = fliesFrom(BR2, DBE, [[0, DBE.k['0u'], K5.puts], [1, DBE.k['1u'], K5.puts + 8]]);
	const cs: V2[] = [apt(DBE, 0, S.prx, S.y, S.s), apt(DBE, 1, S.prx, S.y, S.s)];
	const sw = prog(f, K5.dis, 30);
	return (
		<Overlay>
			<RuleChip text="Reagent 2 of 4: X_2 (X = Cl, Br)" at={K5.second} />
			<Mol2D m={ETHENE} x={S.ex} y={S.y} s={S.s} at={K5.ethene} />
			<Plus x={S.px} y={S.y} at={K5.ethene + 16} />
			<Mol2D m={BR2} x={S.rx} y={S.y} s={S.s} at={K5.ethene + 16} />
			<RxArrow x1={S.a1} x2={S.a2} y={S.y} at={K5.puts - 8} above={[{t: 'room temperature', at: K5.room}]} below={[{t: 'no catalyst', at: K5.nocat}]} />
			<Mol2D m={DBE} x={S.prx} y={S.y} s={S.s} at={K5.puts - 2} fly={fl} />
			<Locants pts={cs} at={K5.prefix} dy={158} size={28} o={dimAt(f, K5.nocat, 0.5)} />
			<Tag x={700} y={700} text="halogen = prefix + locant, like a branch: bromo-, chloro-" at={K5.prefix} out={K5.chlorine} size={28} anchor="middle" />
			<NameBuilder x={BXX} y={BYY} at={K5.prefix} widths={BW} size={38} labels={false} fills={[{slot: 0, text: '1,2-dibromo', at: K5.number}, {slot: 1, text: 'eth', at: K5.so}, {slot: 2, text: 'ane', at: K5.so + 8}]} o={dimAt(f, K5.dibromo + 40, 0.45)} />
			<AnswerChip x={BXX} y={BYY + 120} text="1,2-dibromoethane" at={K5.dibromo} size={38} />
			<Tag x={BXX + 470} y={BYY + 134} text="with Cl_2: 1,2-dichloroethane" at={K5.dichloro} size={28} o={dimAt(f, K5.nocat + 10, 0.4)} />
			<g opacity={vis(f, K5.orange)}>
				<PlateC p={BRW.orange} cx={1720} top={270} h={400} o={1 - sw} />
				<PlateC p={BRW.clear} cx={1720} top={270} h={400} o={sw} />
			</g>
			<Tag x={1720} y={690} text="Br_2 in water: orange" at={K5.orange} out={K5.dis} size={26} anchor="middle" color={BROM} fill="#fbeee2" />
			<Tag x={1720} y={690} text="Br_2 used up: colourless" at={K5.dis} size={26} anchor="middle" />
			<Tag x={1720} y={210} text="a quick test: practical video" at={K5.prac} size={24} anchor="middle" o={dimAt(f, K5.prac + 40, 0.45)} />
			<SmallCard upto={1} fill={K5.prac + 20} />
			{void K5.x2}{void K5.name}{void K5.bw}{void K5.when}{void K5.quick}{void K5.dibromo}
		</Overlay>
	);
};

// ---------- 6. Hydrogen halides: two different pieces ----------
const K6 = cues(sc('hydrogen-halides'), {third: 'Third, a hydrogen', hx: 'H X', such: 'such as', hbr: 'hydrogen bromide', thistime: 'This time', diff: 'different', hgoes: 'the hydrogen goes', brto: 'the bromine to', ethene: 'Ethene gives', bromo: 'bromoethane', number: 'number', because: 'because both', alike: 'alike', withhcl: 'With hydrogen chloride', chloro: 'chloroethane', also: 'This one also', room: 'room temperature', nocat: 'no catalyst'});
const HBR = diat('H', 'Br', 92);
const BRE = cmol([{l: 'H', u: 'H*', d: 'H'}, {u: 'Br*', d: 'H', r: 'H'}]);
export const SceneHydrogen: React.FC = () => {
	const f = useCurrentFrame();
	const fl = fliesFrom(HBR, BRE, [[0, BRE.k['0u'], K6.hgoes], [1, BRE.k['1u'], K6.brto]]);
	const gx = slotCharX(BXX, BW, 0, 'bromo', 0, 38) - 40;
	return (
		<Overlay>
			<RuleChip text="Reagent 3 of 4: HX (HCl, HBr)" at={K6.third} />
			<Mol2D m={ETHENE} x={S.ex} y={S.y} s={S.s} at={K6.such} />
			<Plus x={S.px} y={S.y} at={K6.hbr} />
			<Mol2D m={HBR} x={S.rx} y={S.y} s={S.s} at={K6.hbr} />
			<RxArrow x1={S.a1} x2={S.a2} y={S.y} at={K6.thistime} above={[{t: 'room temperature', at: K6.room}]} below={[{t: 'no catalyst', at: K6.nocat}]} />
			<Mol2D m={BRE} x={S.prx} y={S.y} s={S.s} at={K6.diff} fly={fl} glow={{[BRE.k['0u']]: [K6.hgoes + 22, K6.ethene], [BRE.k['1u']]: [K6.brto + 22, K6.ethene]}} />
			<Tag x={S.prx} y={668} text="two different pieces: H and X" at={K6.diff} out={K6.ethene} size={28} anchor="middle" />
			<NameBuilder x={BXX} y={BYY} at={K6.ethene} widths={BW} size={38} labels={false} fills={[{slot: 0, text: 'bromo', at: K6.bromo}, {slot: 1, text: 'eth', at: K6.bromo + 8}, {slot: 2, text: 'ane', at: K6.bromo + 14}]} />
			<g opacity={vis(f, K6.number, K6.alike + 30)}>
				<Sx x={gx} y={BYY + 50} text="1-" size={38} color="#b8b2a8" anchor="middle" weight={800} at={-1000} />
				<DrawPath d={`M${gx - 26},${BYY + 52} L${gx + 26},${BYY + 18}`} at={K6.alike} dur={8} color="#c4432f" width={5} />
			</g>
			<Tag x={700} y={700} text="only one possible position: no number" at={K6.because} size={28} anchor="middle" o={dimAt(f, K6.withhcl, 0.45)} />
			<Tag x={BXX} y={BYY + 130} text="with HCl: chloroethane" at={K6.chloro} size={28} o={dimAt(f, K6.also, 0.4)} />
			<SmallCard upto={2} fill={K6.nocat + 10} />
			{void K6.hx}
		</Overlay>
	);
};

// ---------- 7. Water: hydration, and why the pressure is high ----------
const K7 = cues(sc('hydration'), {fourth: 'Fourth, water', pieces: 'The pieces', ethene: 'Ethene and water', ethanol: 'ethanol', oh: 'O H on one', h: 'the H on the', hyd: 'Hydration needs', steam: 'steam', phos: 'phosphoric acid', three: 'about three hundred', high: 'high pressure', why: 'Why the pressure', eq: 'equilibrium', two: 'two gas molecules', module: 'From Module', raising: 'raising the pressure', towards: 'so towards', industrial: 'industrial route'});
const H2O = water2(72);
const ETOH = cmol([{l: 'H', u: 'H*', d: 'H'}, {u: 'OH*', d: 'H', r: 'H'}]);
export const SceneHydration: React.FC = () => {
	const f = useCurrentFrame();
	const fl = fliesFrom(H2O, ETOH, [[1, ETOH.k['1u'], K7.oh], [2, ETOH.k['1uH'], K7.oh + 4], [0, ETOH.k['0u'], K7.h]]);
	const dimOther = dimAt(f, K7.why, 0.35);
	const SL = {x: 560, y: 810};
	const line = 'C_2H_4(g) + H_2O(g) ⇌ C_2H_5OH(g)';
	const x0 = SL.x - mw(line, 40, false, 700) / 2;
	const gx = [x0 + mw('C_2H_4(g)', 40, false, 700) / 2, x0 + mw('C_2H_4(g) + ', 40, false, 700) + mw('H_2O(g)', 40, false, 700) / 2, x0 + mw('C_2H_4(g) + H_2O(g) ⇌ ', 40, false, 700) + mw('C_2H_5OH(g)', 40, false, 700) / 2];
	const pl = pulseAt(f, K7.two, 30);
	const gasO = vis(f, K7.two, K7.industrial) * dimAt(f, K7.industrial - 30, 0.4);
	const cardFill = K7.industrial + 40;
	return (
		<Overlay>
			<RuleChip text="Reagent 4 of 4: H_2O" at={K7.fourth} />
			<Mol2D m={ETHENE} x={S.ex} y={S.y} s={S.s} at={K7.pieces} />
			<Plus x={S.px} y={S.y} at={K7.pieces + 20} />
			<Mol2D m={H2O} x={S.rx} y={S.y} s={S.s} at={K7.pieces + 20} glow={{0: [K7.pieces + 30, K7.ethene], 1: [K7.pieces + 40, K7.ethene]}} />
			<Sx x={S.rx} y={S.y + 90} text="H_2O(g)" size={30} color={INK_SOFT} anchor="middle" weight={700} at={K7.steam} />
			<RxArrow x1={S.a1} x2={S.a2} y={S.y} at={K7.ethene} eqAt={K7.eq} nudge={K7.towards} above={[{t: 'steam', at: K7.steam, o: dimOther}, {t: 'H_3PO_4 catalyst', at: K7.phos, o: dimOther}]} below={[{t: 'about 300 °C', at: K7.three, o: dimOther}, {t: 'high pressure', at: K7.high, fill: '#fbeec4'}]} />
			<Mol2D m={ETOH} x={S.prx} y={S.y} s={S.s} at={K7.ethanol - 6} fly={fl} />
			<Tag x={S.prx + 20} y={668} text="-ol: an O–H group" at={K7.oh + 24} out={K7.hyd} size={28} anchor="middle" />
			<CT x={SL.x} y={SL.y} text={line} size={40} anchor="middle" at={K7.eq} o={dimAt(f, K7.industrial - 30, 0.5)} />
			<g opacity={gasO}>
				{gx.map((x, i) => <circle key={i} cx={x} cy={858} r={14 * (1 + 0.35 * pl)} fill="#9fc3dd" stroke="#4f86ad" strokeWidth={3} />)}
				<Sx x={(gx[0] + gx[1]) / 2} y={905} text="2 gas molecules" size={26} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
				<Sx x={gx[2]} y={905} text="→ 1" size={26} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
			</g>
			<Tag x={560} y={940} text="high pressure: shifts towards fewer gas molecules" at={K7.raising} size={28} color={TEAL} fill="#dff2ef" anchor="middle" />
			<Gauge x={1050} y={800} at={K7.raising} />
			<Tag x={1050} y={880} text="from Module 5" at={K7.module} out={K7.industrial} size={22} anchor="middle" />
			<PlateC p={BOTTLE} cx={1730} top={230} h={260} o={vis(f, K7.industrial)} />
			<SmallCard upto={3} fill={cardFill} />
			{void K7.two}{void INK}{void BROM}
		</Overlay>
	);
};
