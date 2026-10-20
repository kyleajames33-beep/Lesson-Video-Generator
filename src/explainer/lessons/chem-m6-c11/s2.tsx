// M6 C11 scenes 7 to 11: the ratio sets the pH (the sliding pKa marker, not neutral, HCl with NaCl crossed); capacity
// (the pH graph against water, the ratio bar running out, same pH but a tenth the capacity); the blood buffer; why
// blood's buffer works (20 : 1, lungs and kidneys, cells and oceans); the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {kf, sc} from './common';
import {LUNGS, RBC} from './assets';
import {
	AChip, ACID_INK, An, Arrow, BASE_INK, BLens, BUF, BUF_X, BloodRuler, Counter, DimG, EqLine, Fade, H3O, HA, INK, INK_SOFT, LensFrame, MistakeX, Note, OHg, Overlay, PHGraph, PKLine, PairBracket,
	PlateAt, RatioBar, Sx, VBracket, WATERL, WAT_X, bufPH, eSpan, eq, fitSize, gX, gY, picW, waterPH,
} from './parts';
import type {BSite} from './parts';

// ---------- 7. The ratio sets the pH ----------
const S7 = 'ratio-sets-ph';
const K7 = cues(sc(S7), {that: 'That ratio sets', more: 'More acid than', below: 'below the', above: 'above And', neutral: 'neutral this', sits: 'sits at four', not: 'not a buffer', chloride: 'Chloride is the', back: 'protons back'});
export const SceneRatio: React.FC = () => {
	const LX = 200, LY = 420, LW = 900;
	const pos = (f: number) => kf(f, [[K7.below - 4, 0], [K7.below + 14, -1], [K7.above - 4, -1], [K7.above + 14, 1], [K7.neutral - 10, 1], [K7.neutral + 10, 0]]);
	const nA = (f: number) => kf(f, [[K7.below - 4, 0.01], [K7.below + 14, 0.014], [K7.above - 4, 0.014], [K7.above + 14, 0.006], [K7.neutral - 10, 0.006], [K7.neutral + 10, 0.01]]);
	const nB = (f: number) => 0.02 - nA(f);
	const mL = LX + LW / 2 - 0.7 * LW / 2, mR = LX + LW / 2 + 0.7 * LW / 2;
	const L = {cx: 1360, cy: 800, r: 170};
	const sites: BSite[] = [
		...([[-0.5, -0.3], [0.35, -0.45], [0.0, 0.1], [-0.4, 0.45], [0.5, 0.35]] as [number, number][]).map(([u, v]) => ({u, v, kind: 'Cl' as const, at: K7.not})),
		...([[-0.1, -0.55], [0.55, -0.05], [-0.6, 0.05], [0.05, 0.55]] as [number, number][]).map(([u, v], k) => ({u, v, kind: 'H3O' as const, enter: K7.not + 20 + k * 10})),
	];
	return (
		<Overlay>
			<DimG at={K7.not} to={0.25}>
				<PKLine x={LX} y={LY} w={LW} at={K7.that} pos={pos} />
				<Note x={mL} y={LY - 80} text="more HA: pH < pKa" size={36} color={ACID_INK} anchor="middle" at={K7.below} out={K7.above} />
				<Note x={mR} y={LY - 80} text="more A^{−}: pH > pKa" size={36} color={BASE_INK} anchor="middle" at={K7.above} out={K7.neutral} />
				<Note x={LX + LW / 2} y={LY + 130} text="equal: pH = pKa" size={36} color={BUF} anchor="middle" at={K7.neutral + 10} />
				<RatioBar x={1400} base={560} k={14000} nA={nA} nB={nB} at={K7.that + 10} bw={80} gap={40} size={26} labA="HA" labB="A^{−}" />
				<AChip x={LX} y={LY + 180} text="this buffer: pH 4.74, not 7" size={38} color={BUF} hand={false} at={K7.sits} />
			</DimG>
			<MistakeX x={LX} y={760} text="HCl + NaCl: buffer?" at={K7.not} cross={K7.chloride + 20} note="Cl^{−} won't take protons back" size={44} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K7.not - 4}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
				<BLens cx={L.cx} cy={L.cy} r={L.r} sites={sites} s={1.3} />
			</LensFrame>
			<Sx x={L.cx} y={L.cy + L.r + 40} text="HCl + NaCl(aq)" size={28} color={INK_SOFT} anchor="middle" weight={700} at={K7.not} />
			{void K7.more}{void K7.back}
		</Overlay>
	);
};

// ---------- 8. Capacity: running out ----------
const S8 = 'capacity';
const K8 = cues(sc(S8), {now: 'Now keep adding', each: 'Each portion', first: 'At first', nine: 'nine millilitres', none: 'none left', nothing: 'Nothing can take', plunges: 'plunges How', capacity: 'capacity It', depends: 'It depends', notph: 'not on the pH'});
export const G8 = {x: 250, y: 230, w: 900, h: 540, xMax: 12, yMax: 8};
export const SceneCapacity: React.FC = () => {
	const f = useCurrentFrame();
	const G = G8;
	const D = (fr: number) => kf(fr, [[K8.each, 0], [K8.nine - 24, 8], [K8.nine, 9], [K8.none, 10], [K8.plunges + 6, 11], [K8.plunges + 40, 12]], false);
	const d = D(f);
	const nA = (fr: number) => Math.min(0.02, 0.01 + D(fr) / 1000);
	const nB = (fr: number) => Math.max(0, 0.01 - D(fr) / 1000);
	const IX1 = 1340, IX2 = 1600, IB = 600;
	return (
		<Overlay>
			<PHGraph x={G.x} y={G.y} w={G.w} h={G.h} xMax={G.xMax} yMax={G.yMax} at={K8.now} xLabel="volume of 1.0 mol/L HCl added (mL)" yLabel="pH" xTicks={[0, 2, 4, 6, 8, 10, 12]} yTicks={[0, 2, 4, 6, 8]} lines={[
				{xs: WAT_X, fn: waterPH, color: WATERL, at: K8.now + 14, upto: fr => kf(fr, [[K8.now + 14, 0], [K8.now + 60, 12]])},
				{xs: BUF_X, fn: bufPH, color: BUF, at: K8.each, upto: D, width: 7},
			]} />
			<Sx x={gX(G.x, G.w, 12, 2.4)} y={gY(G.y, G.h, 8, 1.15)} text="water" size={30} color={WATERL} weight={800} at={K8.now + 50} />
			<Sx x={gX(G.x, G.w, 12, 3.6)} y={gY(G.y, G.h, 8, 5.0)} text="buffer" size={30} color={BUF} weight={800} at={K8.first} />
			<DimG at={K8.capacity} to={0.3}>
				<Fade at={-100} out={K8.notph}>
					<RatioBar x={1400} base={720} k={24000} nA={nA} nB={nB} at={K8.now + 10} greyB={K8.none} size={26} />
					<Counter x={1513} y={790} text={`HCl added: ${Math.min(12, Math.floor(d + 0.001))} mL`} at={K8.each} color={INK} size={30} />
				</Fade>
			</DimG>
			<Sx x={G.x - 70} y={950} text="capacity:" size={44} color={BUF} weight={800} at={K8.capacity} />
			<Note x={G.x + 150} y={950} text="acid or base taken up before a partner is nearly used up" size={40} color={INK} at={K8.capacity + 10} />
			<Fade at={K8.notph}>
				<Sx x={IX1 + 62} y={IB - 175} text="pH 4.74" size={28} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={IX2 + 62} y={IB - 175} text="pH 4.74" size={28} color={INK} anchor="middle" weight={800} at={-1000} />
				<RatioBar x={IX1} base={IB} k={12000} nA={() => 0.01} nB={() => 0.01} at={K8.notph} bw={50} gap={24} size={22} labA="HA" labB="A^{−}" />
				<RatioBar x={IX2} base={IB} k={12000} nA={() => 0.001} nB={() => 0.001} at={K8.notph + 6} bw={50} gap={24} size={22} labA="HA" labB="A^{−}" />
				<Sx x={IX1 + 62} y={IB + 74} text="0.0100 mol each" size={24} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
				<Sx x={IX2 + 62} y={IB + 74} text="0.0010 mol each" size={24} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
				<Note x={(IX1 + IX2) / 2 + 62} y={IB + 140} text="same pH, one tenth the capacity" size={34} color={BUF} anchor="middle" at={K8.notph + 14} />
			</Fade>
			{void K8.nothing}{void K8.depends}
		</Overlay>
	);
};

// ---------- 9. The blood buffer ----------
const S9 = 'blood-buffer';
const K9 = cues(sc(S9), {range: 'seven point three five', enz: 'because enzymes', carb: 'carbonic acid with', hco3: 'hydrogencarbonate ions', muscles: 'When muscles', takes: 'takes up the hydronium', co2: 'carbon dioxide and', lungs: 'lungs breathe'});
const CARB = (at: number[]) => eq(['H_2CO_3(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'HCO_3^{-}(aq)'], at);
export const SceneBlood: React.FC = () => {
	const strip = CARB([K9.carb, K9.carb, K9.carb, K9.hco3, K9.hco3, K9.hco3, K9.hco3]);
	const ss = fitSize(strip, 1100, 44);
	const e1 = eq(['HCO_3^{-}(aq)', '+', 'H_3O^{+}(aq)', '->', 'H_2CO_3(aq)', '+', 'H_2O(l)'], K9.takes);
	const e2 = eq(['H_2CO_3(aq)', '->', 'CO_2(aq)', '+', 'H_2O(l)'], K9.co2);
	const es = fitSize(e1, 1100, 44);
	const LX = 1440, LY = 470, LH = 400;
	const co2 = eSpan(e2, e2.length - 1, es, 96);
	return (
		<Overlay>
			<PlateAt p={RBC} x={96} y={190} h={190} at={0} />
			<BloodRuler x={480} y={300} w={760} at={4} bandAt={K9.range} />
			<Note x={1300} y={312} text="normal blood pH" size={34} color={BUF} at={K9.range + 30} />
			<DimG at={K9.takes} to={0.35}>
				<EqLine items={strip} x={96} y={520} size={ss} />
				<PairBracket items={strip} i={0} j={6} size={ss} x={96} y={520} at={K9.hco3 + 10} above={false} label="conjugate pair" color={BASE_INK} lsize={28} />
			</DimG>
			<EqLine items={e1} x={96} y={720} size={es} />
			<EqLine items={e2} x={96} y={840} size={es} />
			<PlateAt p={LUNGS} x={LX} y={LY} h={LH} at={K9.co2 - 10} />
			<Arrow x1={co2.x2 + 30} y1={826} x2={LX - 20} y2={800} at={K9.co2 + 20} color={INK_SOFT} width={5} />
			<Note x={(co2.x2 + LX) / 2} y={880} text="CO_2 breathed out" size={34} color={INK_SOFT} anchor="middle" at={K9.lungs} />
			{void K9.enz}{void K9.muscles}
		</Overlay>
	);
};

// ---------- 10. Why blood's buffer works ----------
const S10 = 'blood-works';
const K10 = cues(sc(S10), {twenty: 'twenty hydrogencarbonate', together: 'Carbon dioxide and carbonic', far: 'far more acid', suits: 'which suits', topped: 'topped up', lungs: 'the lungs adjust', kidneys: 'the kidneys adjust', phosphate: 'phosphate buffer', oceans: 'in the oceans'});
export const SceneBloodWorks: React.FC = () => {
	const X = 700, BASE = 820, BW = 110, GAP = 200, K = 26;
	const xB = X + BW + GAP;
	const LX = 130, LY = 420, LH = 300;
	const lw = picW(LUNGS, LH);
	return (
		<Overlay>
			<PlateAt p={LUNGS} x={LX} y={LY} h={LH} at={0} />
			<DimG at={K10.phosphate} to={0.25}>
				<RatioBar x={X} base={BASE} k={K} nA={() => 1} nB={() => 20} at={0} bw={BW} gap={GAP} size={28} labA="dissolved CO_2 and H_2CO_3" labB="HCO_3^{-}" />
				<Sx x={960} y={240} text="HCO_3^{-} : dissolved CO_2 about 20 : 1 at pH 7.4" size={36} color={INK} anchor="middle" weight={800} at={K10.twenty} out={K10.far + 30} />
				<Fade at={K10.far} out={K10.topped}>
					<VBracket x={xB + BW + 22} y1={BASE - 520} y2={BASE} at={K10.far} color={BASE_INK} />
					<Note x={xB + BW + 64} y={BASE - 250} text="acid capacity" size={40} color={BASE_INK} at={K10.far + 6} />
					<VBracket x={X - 22} y1={BASE - 30} y2={BASE} at={K10.far + 20} color={ACID_INK} d={-16} />
					<Note x={X - 50} y={BASE - 40} text="base capacity" size={30} color={ACID_INK} anchor="end" at={K10.far + 24} />
				</Fade>
				<Fade at={K10.lungs}>
					<Arrow x1={LX + lw + 10} y1={LY + LH * 0.75} x2={X - 16} y2={BASE - 20} at={K10.lungs} color={INK_SOFT} width={5} />
					<Arrow x1={X - 16} y1={BASE - 20} x2={LX + lw + 10} y2={LY + LH * 0.75} at={K10.lungs + 10} color={INK_SOFT} width={5} />
					<Note x={LX + lw + 30} y={LY + LH * 0.75 - 40} text="lungs: minutes" size={34} color={INK} at={K10.lungs + 10} />
				</Fade>
				<Fade at={K10.kidneys}>
					<Arrow x1={xB + BW + 40} y1={BASE - 200} x2={xB + BW + 40} y2={BASE - 400} at={K10.kidneys} color={INK_SOFT} width={5} />
					<Arrow x1={xB + BW + 40} y1={BASE - 400} x2={xB + BW + 40} y2={BASE - 200} at={K10.kidneys + 10} color={INK_SOFT} width={5} />
					<Note x={xB + BW + 70} y={BASE - 290} text="kidneys: hours to days" size={34} color={INK} at={K10.kidneys + 10} />
				</Fade>
			</DimG>
			<AChip x={300} y={920} text="cells: H_2PO_4^{−} / HPO_4^{2−}" size={40} color={BUF} hand={false} at={K10.phosphate} />
			<AChip x={1060} y={920} text="oceans: HCO_3^{−} / CO_3^{2−}" size={40} color={BUF} hand={false} at={K10.oceans} />
			{void K10.together}{void K10.suits}{void K10.topped}
		</Overlay>
	);
};

// ---------- 11. Memory aid ----------
const S11 = 'memory-aid';
const K11 = cues(sc(S11), {here: "here's what to", aid: 'A buffer has a defender', conj: 'the conjugate base takes', weak: 'the weak acid takes', resists: 'resists it', add: 'Add enough'});
export const SceneAid: React.FC = () => {
	const Y = 470;
	return (
		<Overlay>
			<DimG at={K11.resists} to={0.6}>
				<Note x={960} y={320} text="A buffer has a defender for each attack." size={72} color={BUF} anchor="middle" at={K11.aid - 10} />
				<Fade at={K11.conj}>
					<An x={670} y={Y} s={2.6} />
					<Sx x={745} y={Y + 12} text="vs" size={30} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
					<H3O x={830} y={Y} s={2.4} />
					<Sx x={750} y={Y + 90} text="A^{−} takes added acid" size={30} color={BASE_INK} anchor="middle" weight={700} at={-1000} />
				</Fade>
				<Fade at={K11.weak}>
					<HA x={1070} y={Y} s={2.4} a={-0.5} />
					<Sx x={1165} y={Y + 12} text="vs" size={30} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
					<OHg x={1240} y={Y} s={2.4} />
					<Sx x={1160} y={Y + 90} text="HA takes added base" size={30} color={ACID_INK} anchor="middle" weight={700} at={-1000} />
				</Fade>
			</DimG>
			<Note x={960} y={700} text="Resists, doesn't prevent: it can run out." size={60} color={INK} anchor="middle" at={K11.resists} />
			<PHGraph x={800} y={760} w={320} h={180} xMax={12} yMax={8} at={K11.resists + 10} xLabel="" yLabel="" xTicks={[]} yTicks={[]} size={20} lines={[
				{xs: BUF_X, fn: bufPH, color: BUF, at: K11.resists + 16, upto: fr => kf(fr, [[K11.resists + 16, 0], [K11.add + 30, 12]]), width: 6},
			]} />
			{void K11.here}
		</Overlay>
	);
};
