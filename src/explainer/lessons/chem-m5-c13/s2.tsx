import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {AN_INK, CAT_INK, Heading, PPT_Y_INK, sc} from './common';
import {AGCL, PBI2} from './assets';
import {Arrow, ArcLink, Chip, EqLine, Fade, Ion, LineLabel, MistakeChip, Overlay, PicH, Pieces, RulesMini, Sx, SwapCross, TEAL, eCentre, eWidth, fitSize} from './parts';
import type {EItem, Pair} from './parts';

export const SX = {x: 320, xr: 850, y1: 340, y2: 520, size: 44};
export const RM = {x: 1290, y: 240, size: 22};
export const WHITE_INK = '#5b626b';
const c = (items: EItem[], i: number, size: number, x: number, y: number) => eCentre(items, i, size, x, y);

// ---------- 6. The method: swap partners, check both ----------
const SM = 'swap-method';
const K6 = cues(sc(SM), {method: "here's the method", list: 'List the four ions', swap: 'swap partners', each: 'each positive ion', two: 'two possible products', check: 'check both', insol: 'If one is insoluble', both: 'If both are soluble', nothing: 'nothing forms'});
export const SceneSwapMethod: React.FC = () => (
	<>
		<Heading text="The method: swap partners, check both" at={4} size={56} />
		<Overlay>
			<SwapCross x={SX.x} xr={SX.xr} y1={SX.y1} y2={SX.y2} size={SX.size} left={[['A^{+}', 'B^{-}'], ['C^{+}', 'D^{-}']]} leftAt={[K6.list, K6.list + 10]} swap={K6.swap} resAt={[K6.each, K6.each + 14]}
				verdicts={[{kind: 'ppt', at: K6.insol, label: 'insoluble: the precipitate'}, {kind: 'ok', at: K6.check + 20, label: 'soluble: stays dissolved'}]} />
			<Sx x={SX.x} y={250} text="each positive ion pairs with the other solution's negative ion" size={34} color={CAT_INK} hand at={K6.each} />
			<Sx x={SX.x} y={300 - 34 + 400 - 60} text="list the four ions" size={34} color={INK_SOFT} hand at={K6.list} />
			<Sx x={SX.xr} y={650} text="two possible products" size={36} color={INK_SOFT} hand at={K6.two} />
			<RulesMini x={RM.x} y={RM.y} size={RM.size} at={K6.check} />
			<Sx x={SX.x} y={760} text="one insoluble: that's the precipitate" size={40} color={AMBER_INK} hand at={K6.insol} />
			<Sx x={SX.x} y={820} text="both soluble: nothing forms" size={40} color={TEAL} hand at={K6.both} />
			<MistakeChip x={SX.x} y={880} text="checked one product only" size={32} at={K6.check + 24} note="check both" />
			{void K6.method}{void K6.nothing}
		</Overlay>
	</>
);

// ---------- 7. Worked example 1: potassium chloride and silver nitrate ----------
const AG = 'agcl-molecular';
const K7 = cues(sc(AG), {try: 'first syllabus pair', kcl: ['potassium chloride', 1], agno: ['silver nitrate', 1], swap: 'Swap partners', agcl: ['silver chloride', 1], kno3: ['potassium nitrate', 1], nitrate: 'is a nitrate', g1: 'Group 1', sol: "so it's soluble", halide: 'a halide with silver', exc: 'one of the exceptions', insol: "so it's insoluble", white: 'A white precipitate', full: 'The full equation', fk: 'potassium chloride plus', fag: 'silver nitrate gives', agclS: 'silver chloride solid', fkno: 'plus potassium nitrate'});
export const MOL1 = (ats: number[]): EItem[] => [
	{t: 'KCl(aq)', at: ats[0]}, {op: '+', at: ats[1]}, {t: 'AgNO_3(aq)', at: ats[2]}, {op: '->', at: ats[3]}, {t: 'AgCl(s)', color: WHITE_INK, at: ats[4]}, {op: '+', at: ats[5]}, {t: 'KNO_3(aq)', at: ats[6]},
];
export const AGCL_PAIRS: [Pair, Pair] = [['K^{+}', 'Cl^{-}'], ['Ag^{+}', 'NO_3^{-}']];
export const SceneAgclMolecular: React.FC = () => (
	<>
		<Heading text="Pair 1: potassium chloride + silver nitrate" at={4} size={54} />
		<Overlay>
			<SwapCross x={SX.x} xr={SX.xr} y1={SX.y1} y2={SX.y2} size={SX.size} left={AGCL_PAIRS} leftAt={[K7.kcl, K7.agno]} swap={K7.swap} resAt={[K7.agcl, K7.kno3]}
				verdicts={[{kind: 'ppt', at: K7.insol, label: 'halide with Ag^{+}: insoluble'}, {kind: 'ok', at: K7.sol, label: 'nitrate, Group 1: soluble'}]} />
			<RulesMini x={RM.x} y={RM.y} size={RM.size} at={K7.swap + 20} hi={[{id: 'N', at: K7.nitrate, out: K7.halide}, {id: 'G', at: K7.g1, out: K7.halide}, {id: 'Hal', at: K7.halide}]} />
			<Fade at={K7.white}><PicH p={AGCL} x={90} y={300} h={330} /></Fade>
			<Sx x={180} y={680} text="white solid" size={36} color={WHITE_INK} anchor="middle" hand at={K7.white + 6} />
			<LineLabel x={96} y={800} text="molecular equation (whole formulas)" at={K7.full} />
			<EqLine items={MOL1([K7.fk, K7.fk + 14, K7.fag, K7.agclS - 8, K7.agclS, K7.fkno, K7.fkno + 6])} x={96} y={880} size={52} />
			{void K7.try}{void K7.exc}
		</Overlay>
	</>
);

// ---------- 8. The full ionic equation: split only the aqueous ----------
const FI = 'full-ionic';
const K8 = cues(sc(FI), {hides: 'equation hides', every: 'every aqueous compound', left: 'On the left', kions: 'potassium ions', clions: 'chloride ions', agions: 'silver ions', noions: 'nitrate ions', right: 'On the right', splits: 'splits too', solid: 'is a solid', whole: 'stays whole', full: 'full ionic equation'});
const L1 = {x: 96, y: 330, s: 50};
export const L2Y = 600;
export const FULL1 = (m1: EItem[], ats: number[], s2: number, x2: number, opt: {strike?: [number, number]; lock?: number} = {}): EItem[] => {
	const fr = (i: number) => c(m1, i, L1.s, L1.x, L1.y);
	void s2; void x2;
	return [
		{t: 'K^{+}(aq)', color: CAT_INK, at: ats[0], from: fr(0), strike: opt.strike?.[0]}, {op: '+', at: ats[1]}, {t: 'Cl^{-}(aq)', color: AN_INK, at: ats[2], from: fr(0)}, {op: '+', at: ats[3]},
		{t: 'Ag^{+}(aq)', color: CAT_INK, at: ats[4], from: fr(2)}, {op: '+', at: ats[5]}, {t: 'NO_3^{-}(aq)', color: AN_INK, at: ats[6], from: fr(2), strike: opt.strike?.[1]}, {op: '->', at: ats[7]},
		{t: 'AgCl(s)', color: WHITE_INK, at: ats[8], from: fr(4), lock: opt.lock, dur: 20}, {op: '+', at: ats[9]},
		{t: 'K^{+}(aq)', color: CAT_INK, at: ats[10], from: fr(6), strike: opt.strike?.[0]}, {op: '+', at: ats[11]}, {t: 'NO_3^{-}(aq)', color: AN_INK, at: ats[12], from: fr(6), strike: opt.strike?.[1]},
	];
};
export const SceneFullIonic: React.FC = () => {
	const m1 = MOL1([-100, -100, -100, -100, -100, -100, -100]);
	const ats = [K8.kions, K8.kions + 12, K8.clions, K8.agions - 8, K8.agions, K8.noions - 8, K8.noions, K8.right, K8.solid, K8.splits - 8, K8.splits, K8.splits + 8, K8.splits + 12];
	const items = FULL1(m1, ats, 0, 0, {lock: K8.solid + 18});
	const s2 = fitSize(items, 1720, 48);
	const agc = c(items, 8, s2, 96, L2Y);
	return (
		<>
			<Heading text="The full ionic equation" at={4} size={58} />
			<Overlay>
				<LineLabel x={L1.x} y={L1.y - 62} text="molecular equation" at={-100} />
				<EqLine items={m1} x={L1.x} y={L1.y} size={L1.s} />
				<Sx x={96} y={450} text="write every (aq) compound as its separate ions" size={38} color={INK} hand at={K8.every} />
				<LineLabel x={96} y={L2Y - 70} text="full ionic equation" at={K8.full} />
				<EqLine items={items} x={96} y={L2Y} size={s2} />
				<Sx x={agc[0]} y={L2Y + 70} text="(s): never split" size={36} color={TEAL} anchor="middle" hand at={K8.whole} />
				<Sx x={96} y={800} text="left: K^{+}, Cl^{-}, Ag^{+}, NO_3^{-}    right: AgCl(s) stays whole, K^{+} and NO_3^{-}" size={34} color={INK_SOFT} weight={600} at={K8.whole + 20} />
				{void K8.hides}{void K8.left}
			</Overlay>
		</>
	);
};

// ---------- 9. Cancel the spectators: the net ionic equation ----------
const NI = 'net-ionic';
const K9 = cues(sc(NI), {look: 'look for ions', unchanged: 'unchanged on both sides', kno: 'Potassium and nitrate', spect: "They're the spectators", cross: 'cross them out', left: "What's left", net: 'net ionic equation', agp: 'silver ion plus', clp: 'chloride ion gives', gives: 'gives silver chloride', check: 'Check the charges', pm: 'plus one and minus one', zero: 'make zero', neutral: 'solid is neutral', same: 'net equation is the same', wherever: 'wherever'});
const L2b = {x: 96, y: 330};
export const SceneNetIonic: React.FC = () => {
	const m1 = MOL1([-100, -100, -100, -100, -100, -100, -100]);
	const base = FULL1(m1, Array(13).fill(-100), 0, 0, {strike: [K9.cross, K9.cross + 10]}).map(it => ('from' in it ? {...it, from: undefined} : it));
	const s2 = fitSize(base, 1720, 48);
	const cc = (i: number) => c(base, i, s2, L2b.x, L2b.y);
	const net: EItem[] = [{t: 'Ag^{+}(aq)', color: CAT_INK, at: K9.agp, from: cc(4)}, {op: '+', at: K9.clp - 6}, {t: 'Cl^{-}(aq)', color: AN_INK, at: K9.clp, from: cc(2)}, {op: '->', at: K9.gives}, {t: 'AgCl(s)', color: WHITE_INK, at: K9.gives + 6, from: cc(8)}];
	const L3 = {x: 96, y: 640, s: 58};
	const end = L3.x + eWidth(net, L3.s);
	return (
		<>
			<Heading text="Cancel the spectators: the net ionic equation" at={4} size={52} />
			<Overlay>
				<LineLabel x={L2b.x} y={L2b.y - 66} text="full ionic equation" at={-100} />
				<EqLine items={base} x={L2b.x} y={L2b.y} size={s2} />
				<ArcLink a={[cc(0)[0], L2b.y + 16]} b={[cc(10)[0], L2b.y + 16]} at={K9.unchanged} bow={120} color={INK_SOFT} />
				<ArcLink a={[cc(6)[0], L2b.y + 16]} b={[cc(12)[0], L2b.y + 16]} at={K9.unchanged + 10} bow={70} color={INK_SOFT} />
				<Sx x={cc(6)[0] + 40} y={L2b.y + 140} text="the same on both sides: spectators" size={36} color={INK_SOFT} hand at={K9.spect} />
				<LineLabel x={L3.x} y={L3.y - 72} text="net ionic equation" at={K9.net} />
				<EqLine items={net} x={L3.x} y={L3.y} size={L3.s} />
				<Pieces x={L3.x} y={L3.y + 100} size={40} items={[{t: 'charges:', at: K9.check, hand: true, color: INK_SOFT}, {t: '(+1) + (−1) = 0', at: K9.pm}, {t: '→', at: K9.neutral}, {t: 'AgCl(s): 0', at: K9.neutral + 6}]} />
				<Chip x={1180} y={600} w={300} text="from NaCl" size={36} color={INK_SOFT} at={K9.wherever} />
				<Chip x={1180} y={690} w={300} text="from CaCl_2" size={36} color={INK_SOFT} at={K9.wherever + 8} />
				<Arrow x1={1170} y1={631} x2={end + 20} y2={L3.y - 20} at={K9.wherever + 4} color={INK_SOFT} width={3.5} />
				<Arrow x1={1170} y1={721} x2={end + 20} y2={L3.y - 6} at={K9.wherever + 12} color={INK_SOFT} width={3.5} />
				<Sx x={1510} y={676} text="same net equation" size={40} color={TEAL} hand at={K9.wherever + 16} />
				{void K9.look}{void K9.kno}{void K9.left}{void K9.zero}{void K9.same}
			</Overlay>
		</>
	);
};

// ---------- 10. Worked example 2: the lead iodide formula ----------
const PB = 'pbi2-formula';
const K10 = cues(sc(PB), {swap: 'Swap partners for', pbI: 'lead with iodide', kno: 'potassium with nitrate', kno3sol: 'Potassium nitrate is soluble', exc: 'Lead with a halide', pbi2: 'lead iodide is the bright', isnt: "formula isn't", twoplus: 'two plus', oneminus: 'one minus', twoI: 'two iodides', balance: 'balance one lead', pbi2b: 'P b I two', fullneeds: 'full equation needs', twoK: 'two potassium iodides', twoKions: 'two potassium ions', twoNO: 'two nitrate ions', spect: 'are the spectators', net: 'The net ionic equation is', netEq: 'lead ion plus two', twoIons: 'two iodide ions', gives: 'gives lead iodide', charges: 'Charges', plus2: ['plus two', 2], minus: 'two minus ones', zero: 'make zero'});
export const SceneLeadIodide: React.FC = () => {
	const f = useCurrentFrame();
	const outA = K10.fullneeds - 6;
	const slide = prog(f, K10.twoI, 26);
	const P = {x: 980, y: 760};
	const m1: EItem[] = [{t: '2KI(aq)', at: K10.twoK}, {op: '+', at: K10.fullneeds + 4}, {t: 'Pb(NO_3)_2(aq)', at: K10.fullneeds + 6}, {op: '->', at: K10.fullneeds + 10}, {t: 'PbI_2(s)', color: PPT_Y_INK, at: K10.fullneeds + 12}, {op: '+', at: K10.fullneeds + 14}, {t: '2KNO_3(aq)', at: K10.fullneeds + 16}];
	const s1 = fitSize(m1, 1500, 50);
	const fr = (i: number) => c(m1, i, s1, 96, 320);
	const a0 = K10.twoK + 26;
	const full: EItem[] = [
		{t: '2K^{+}(aq)', color: CAT_INK, at: a0, from: fr(0), strike: K10.twoKions}, {op: '+', at: a0 + 6}, {t: '2I^{-}(aq)', color: AN_INK, at: a0 + 8, from: fr(0)}, {op: '+', at: a0 + 14},
		{t: 'Pb^{2+}(aq)', color: CAT_INK, at: a0 + 16, from: fr(2)}, {op: '+', at: a0 + 22}, {t: '2NO_3^{-}(aq)', color: AN_INK, at: a0 + 24, from: fr(2), strike: K10.twoNO}, {op: '->', at: a0 + 30},
		{t: 'PbI_2(s)', color: PPT_Y_INK, at: a0 + 32, from: fr(4), lock: a0 + 50, dur: 20}, {op: '+', at: a0 + 38},
		{t: '2K^{+}(aq)', color: CAT_INK, at: a0 + 40, from: fr(6), strike: K10.twoKions + 6}, {op: '+', at: a0 + 46}, {t: '2NO_3^{-}(aq)', color: AN_INK, at: a0 + 48, from: fr(6), strike: K10.twoNO + 6},
	];
	const s2 = fitSize(full, 1720, 46);
	const fc = (i: number) => c(full, i, s2, 96, 520);
	const net: EItem[] = [{t: 'Pb^{2+}(aq)', color: CAT_INK, at: K10.netEq, from: fc(4)}, {op: '+', at: K10.twoIons - 6}, {t: '2I^{-}(aq)', color: AN_INK, at: K10.twoIons, from: fc(2)}, {op: '->', at: K10.gives}, {t: 'PbI_2(s)', color: PPT_Y_INK, at: K10.gives + 6, from: fc(8)}];
	return (
		<>
			<Heading text="Pair 2: lead iodide (the hook's pair)" at={4} size={54} />
			<Overlay>
				{/* stage A: swap and check */}
				<SwapCross x={SX.x} xr={SX.xr} y1={SX.y1} y2={SX.y2} size={SX.size} left={[['K^{+}', 'I^{-}'], ['Pb^{2+}', 'NO_3^{-}']]} leftAt={[2, 8]} swap={K10.swap + 10} resAt={[K10.pbI, K10.kno]}
					verdicts={[{kind: 'ppt', at: K10.exc, label: 'halide with Pb^{2+}: insoluble'}, {kind: 'ok', at: K10.kno3sol, label: 'soluble'}]} out={outA} />
				<RulesMini x={RM.x} y={RM.y} size={RM.size} at={K10.swap + 20} out={outA} hi={[{id: 'N', at: K10.kno3sol, out: K10.exc}, {id: 'Hal', at: K10.exc}]} />
				<Fade at={K10.pbi2} out={outA}><PicH p={PBI2} x={90} y={300} h={330} /><Sx x={180} y={680} text="bright yellow" size={36} color={PPT_Y_INK} anchor="middle" hand at={K10.pbi2 + 6} /></Fade>
				{/* stage B: the formula from the charges */}
				<Fade at={K10.isnt} out={outA}>
					<MistakeChip x={SX.x} y={650} text="PbI" size={40} at={K10.isnt} note="the charges must balance" />
					<Ion x={P.x} y={P.y} kind="+" r={34} label="Pb^{2+}" labelSize={22} />
					<Sx x={P.x} y={P.y - 52} text="+2" size={40} color={CAT_INK} anchor="middle" weight={800} at={K10.twoplus} />
					<Ion x={P.x + 96} y={P.y} kind="-" r={38} label="I^{-}" labelSize={24} />
					<Sx x={P.x + 96} y={P.y - 56} text="−1" size={40} color={AN_INK} anchor="middle" weight={800} at={K10.oneminus} />
					{f >= K10.twoI ? <g opacity={prog(f, K10.twoI, 8)}>
						<Ion x={P.x + 400 - 208 * slide} y={P.y} kind="-" r={38} label="I^{-}" labelSize={24} />
						<Sx x={P.x + 400 - 208 * slide} y={P.y - 56} text="−1" size={40} color={AN_INK} anchor="middle" weight={800} at={K10.twoI} />
					</g> : null}
					<Sx x={P.x + 260} y={P.y + 18} text="→ PbI_2" size={64} color={PPT_Y_INK} weight={800} at={K10.pbi2b} />
					<Sx x={P.x - 40} y={P.y + 110} text="(+2) + 2(−1) = 0" size={40} color={INK} weight={700} at={K10.balance} />
				</Fade>
				{/* stage C and D: the equation stack */}
				<LineLabel x={96} y={258} text="molecular equation" at={K10.fullneeds} />
				<EqLine items={m1} x={96} y={320} size={s1} />
				<LineLabel x={96} y={456} text="full ionic equation" at={a0} />
				<EqLine items={full} x={96} y={520} size={s2} />
				<Sx x={96} y={600} text="spectators: 2K^{+} and 2NO_3^{-}" size={34} color={INK_SOFT} hand at={K10.spect} />
				<LineLabel x={96} y={690} text="net ionic equation" at={K10.net} />
				<EqLine items={net} x={96} y={760} size={58} />
				<Pieces x={96} y={860} size={40} items={[{t: 'charges:', at: K10.charges, hand: true, color: INK_SOFT}, {t: '(+2)', at: K10.plus2}, {t: '+ 2(−1)', at: K10.minus}, {t: '= 0', at: K10.zero}]} />
				{void INK}
			</Overlay>
		</>
	);
};
