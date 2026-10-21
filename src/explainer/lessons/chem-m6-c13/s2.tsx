// M6 C13 scenes 7 to 12: three kinds of salt (three columns, small lenses, the ammonium equation, a chip row);
// worked example (the ethanoate concentration with a volume bar; Kb, [OH-], pOH and pH); the jump (the ethanoic acid
// curve, a one-drop magnifier, phenolphthalein and methyl orange bands, the titre that is too small); the rule with
// the strong acid curve; the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {sc} from './common';
import {AMMONIA, MO_SET, SET_U} from './assets';
import {XS25, fine, phEth, phHCl} from './curves';
import {
	ACID, ACID_INK, AChip, An, Axes, BASE_INK, BTB_BLUE, BTB_YEL, Band, CLEAR, ClTok, Curve, DimG, Drop, ETH_C, EqLine, Fade, GCard, GDot, HCL_C, HydSite, INK, INK_SOFT, Inset, JumpBracket,
	KeptChip, LensFrame, Lit, MO_RED, MO_YEL, NAVY, NaTok, Note, OHg, Overlay, P, PINK, PINK_INK, PicH, SetRing, StepAfter, Sx, TEAL, TaskLine, Tree, UNK, WLine, WaterT, eq, fitSize, gx, gy,
	litRange, mw, picW, smooth,
} from './parts';
import type {GG} from './parts';
import {EQ_HYD, EQ_SALT} from './s1';

const LENS_BG = '#eef6fb';

// ---------- 7. Three kinds of salt ----------
const S7 = 'three-salts';
const K7 = cues(sc(S7), {swap: 'Swap in', holds: 'holds sodium', chloride: 'Chloride, from', neutral: 'is neutral', titrate: 'Titrate ammonia', make: 'you make', ammonium: 'Ammonium, the', gives: 'gives protons', hyd: 'making hydronium', acidic: 'is acidic'});
const COLX = [330, 960, 1590];
const LR = 140, LY = 480;
const MiniLens: React.FC<{cx: number; at: number; children: React.ReactNode}> = ({cx, at, children}) => (
	<LensFrame cx={cx} cy={LY} r={LR} at={at}>
		<rect x={cx - LR} y={LY - LR} width={2 * LR} height={2 * LR} fill={LENS_BG} />
		{children}
	</LensFrame>
);
export const SceneSalts: React.FC = () => {
	const eL = eq(['CH_3COOH', '+', 'NaOH', '->', 'CH_3COONa', '+', 'H_2O'], -100);
	const eM = eq(['HCl', '+', 'NaOH', '->', 'NaCl', '+', 'H_2O'], [K7.swap + 17, K7.swap + 30, K7.swap + 34, K7.holds, K7.holds + 12, K7.holds + 20, K7.holds + 24]);
	const eR = eq(['HCl', '+', 'NH_3', '->', 'NH_4Cl'], [K7.titrate + 30, K7.titrate + 20, K7.titrate + 12, K7.make, K7.make + 8]);
	const eA = eq(['NH_4^{+}(aq)', '+', 'H_2O(l)', '<=>', 'NH_3(aq)', '+', 'H_3O^{+}(aq)'], [K7.ammonium, K7.gives + 12, K7.gives + 20, K7.hyd - 6, K7.hyd, K7.hyd + 4, K7.hyd + 8]);
	const cs = 30;
	const aS = fitSize(eA, 580, 30);
	const L = (cx: number, u: number, v: number): [number, number] => [cx + u * LR, LY + v * LR];
	const chipY = 800;
	return (
		<Overlay>
			<DimG at={K7.titrate} to={0.35}>
				<EqLine items={eL} x={COLX[0]} y={290} size={fitSize(eL, 560, cs)} anchor="middle" />
				<MiniLens cx={COLX[0]} at={-100}>
					<WaterT x={L(COLX[0], -0.5, 0.45)[0]} y={L(COLX[0], -0.5, 0.45)[1]} s={1} />
					<NaTok x={L(COLX[0], 0.45, -0.45)[0]} y={L(COLX[0], 0.45, -0.45)[1]} s={0.7} grey={1} />
					<An x={L(COLX[0], -0.4, -0.35)[0]} y={L(COLX[0], -0.4, -0.35)[1]} s={1.2} />
					<An x={L(COLX[0], 0.45, 0.4)[0]} y={L(COLX[0], 0.45, 0.4)[1]} s={1.2} />
					<OHg x={L(COLX[0], 0.0, 0.1)[0]} y={L(COLX[0], 0.0, 0.1)[1]} s={1.1} />
				</MiniLens>
			</DimG>
			<DimG at={K7.titrate} to={0.35}>
				<EqLine items={eM} x={COLX[1]} y={290} size={cs} anchor="middle" />
				<MiniLens cx={COLX[1]} at={K7.holds}>
					{[[-0.5, -0.3], [0.5, 0.45], [0.05, 0.65]].map(([u, v], i) => <WaterT key={'w' + i} x={L(COLX[1], u, v)[0]} y={L(COLX[1], u, v)[1]} s={1} />)}
					<NaTok x={L(COLX[1], -0.35, 0.3)[0]} y={L(COLX[1], -0.35, 0.3)[1]} s={0.8} grey={1} />
					<NaTok x={L(COLX[1], 0.4, -0.4)[0]} y={L(COLX[1], 0.4, -0.4)[1]} s={0.8} grey={1} />
					<ClTok x={L(COLX[1], 0.05, -0.05)[0]} y={L(COLX[1], 0.05, -0.05)[1]} s={0.8} grey={1} />
					<ClTok x={L(COLX[1], -0.1, -0.6)[0]} y={L(COLX[1], -0.1, -0.6)[1]} s={0.8} grey={1} />
				</MiniLens>
				<Note x={COLX[1]} y={LY + LR + 46} text="no ion reacts with water" size={28} color={INK_SOFT} anchor="middle" at={K7.chloride} out={K7.titrate} />
			</DimG>
			<DimG at={K7.acidic + 10} to={0.35}>
				<EqLine items={eR} x={COLX[2]} y={290} size={cs} anchor="middle" />
			</DimG>
			<PicH p={AMMONIA} x={1760} y={400} h={170} o={prog(useCurrentFrame(), K7.titrate, 14)} />
			<MiniLens cx={COLX[2]} at={K7.make}>
				{[[-0.55, 0.2], [0.05, 0.7]].map(([u, v], i) => <WaterT key={'w' + i} x={L(COLX[2], u, v)[0]} y={L(COLX[2], u, v)[1]} s={1} />)}
				<ClTok x={L(COLX[2], 0.5, 0.35)[0]} y={L(COLX[2], 0.5, 0.35)[1]} s={0.8} grey={1} />
				<ClTok x={L(COLX[2], -0.5, -0.5)[0]} y={L(COLX[2], -0.5, -0.5)[1]} s={0.8} grey={1} />
				<HydSite x={L(COLX[2], 0.3, -0.45)[0]} y={L(COLX[2], 0.3, -0.45)[1]} w={L(COLX[2], 0.62, -0.05)} at={1e6} kind="nh4" s={1.3} a={0.3} />
				<HydSite x={L(COLX[2], -0.15, 0.05)[0]} y={L(COLX[2], -0.15, 0.05)[1]} w={L(COLX[2], 0.18, 0.3)} at={K7.hyd} kind="nh4" s={1.3} a={0.3} />
			</MiniLens>
			<DimG at={K7.acidic + 10} to={0.35}>
				<EqLine items={eA} x={COLX[2]} y={LY + LR + 70} size={aS} anchor="middle" />
			</DimG>
			<DimG at={K7.titrate} to={0.35} undim={K7.acidic + 10}>
				<AChip x={COLX[0]} y={chipY} text="basic: pH > 7" size={34} color={BASE_INK} hand={false} anchor="middle" at={-100} />
				<AChip x={COLX[1]} y={chipY} text="neutral: pH 7.00 at 25 °C" size={34} color={INK} hand={false} anchor="middle" at={K7.neutral} />
			</DimG>
			<AChip x={COLX[2]} y={chipY} text="acidic: pH < 7" size={34} color={ACID_INK} hand={false} anchor="middle" at={K7.acidic} />
			<Note x={960} y={985} text="salt hydrolysis: an ion reacting with water" size={30} color={INK_SOFT} anchor="middle" at={K7.gives} />
		</Overlay>
	);
};

// ---------- 8. Worked example: the ethanoate concentration ----------
const S8 = 'we-concentration';
const K8 = cues(sc(S8), {now: 'Now the pH', step: 'Step one', held: 'The acid held', r250: 'zero point zero zero two', became: 'became ethanoate', adding: 'But adding', doubled: 'doubled the', fifty: 'to fifty', conc: 'ethanoate concentration', r05: 'zero point zero five zero zero'});
export const TASK13 = 'Find the pH at equivalence';
const GX = 96, GY = 230, GW = 860, GS = 30, GLH = 58;
export const GIV13 = ['CH_3COOH: 25.00 mL, 0.100 mol/L', 'NaOH: 0.100 mol/L, 25.00 mL at equivalence', 'Ka(CH_3COOH) = 1.8 × 10^{−5}; Kw = 1.0 × 10^{−14} (25 °C)'];
export const KEPT13 = '[CH_3COO^{−}] = 0.0500 mol/L';
export const SceneWeConc: React.FC = () => {
	const f = useCurrentFrame();
	const BX = 1100, BY = 400, BW = 640, BH = 70;
	const k = BW / 50;
	const slide = smooth(prog(f, K8.doubled - 14, 26));
	return (
		<Overlay>
			<TaskLine text={TASK13} at={K8.now} />
			<StepAfter size={70} task={TASK13} text="Step 1 of 2: [CH_3COO^{−}]" at={K8.step} />
			<GCard x={GX} y={GY} w={GW} size={GS} lh={GLH} at={K8.now + 10} lines={GIV13.map((t, i) => ({t, at: K8.now + 16 + i * 8}))} />
			<DimG at={K8.r05 + 60} to={0.4}>
				<Fade at={K8.adding}>
					<rect x={BX} y={BY} width={BW} height={BH} rx={10} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" />
					<rect x={BX} y={BY} width={25 * k} height={BH} rx={10} fill={ACID} opacity={0.85} />
					<Sx x={BX + 12.5 * k} y={BY + 46} text="acid 25.00 mL" size={28} color="#ffffff" anchor="middle" weight={800} at={-1000} />
				</Fade>
				<g opacity={prog(f, K8.doubled - 14, 10)}>
					<rect x={BX + 25 * k + (1 - slide) * 260} y={BY} width={25 * k} height={BH} rx={10} fill={NAVY} opacity={0.85} />
					<Sx x={BX + 37.5 * k + (1 - slide) * 260} y={BY + 46} text="base 25.00 mL" size={28} color="#ffffff" anchor="middle" weight={800} at={-1000} />
				</g>
				<Fade at={K8.fifty}>
					<path d={`M${BX},${BY + BH + 14} L${BX},${BY + BH + 28} L${BX + BW},${BY + BH + 28} L${BX + BW},${BY + BH + 14}`} fill="none" stroke={INK} strokeWidth={4} />
					<Sx x={BX + BW / 2} y={BY + BH + 72} text="total 50.00 mL = 0.05000 L" size={32} color={INK} anchor="middle" weight={800} at={K8.fifty} />
				</Fade>
				<Note x={BX} y={BY - 26} text="acid + base volumes" size={28} color={INK_SOFT} at={K8.doubled} out={K8.r05} />
			</DimG>
			<WLine x={96} y={650} size={36} dim={K8.conc} items={P('n(CH_3COO^{−}) = n(CH_3COOH) = 0.100 × 0.02500', K8.held, {t: '= 2.50 × 10^{−3} mol', color: ACID_INK}, K8.r250 + 50)} />
			<Note x={96} y={720} text="essentially all of the acid became ethanoate" size={30} color={INK_SOFT} at={K8.became} out={K8.conc} />
			<WLine x={96} y={730} size={36} items={P('[CH_3COO^{−}] = 2.50 × 10^{−3} ÷ 0.05000', K8.conc, {t: '= 0.0500 mol/L', color: TEAL}, K8.r05 + 40)} />
			<KeptChip x={1000} y={250} text={KEPT13} at={K8.r05 + 70} color={TEAL} size={34} />
		</Overlay>
	);
};

// ---------- 9. Worked example: Kb and the pH ----------
const S9 = 'we-ph';
const K9 = cues(sc(S9), {two: 'Step two', method: 'weak base method', kb: 'Its K', over: 'K w over', r56: 'five point six', hyd: 'Hydroxide is the', sqrt: 'square root', r53: 'five point three', poh: 'That gives', r528: 'five point two eight', ph: 'and a pH', r872: 'eight point seven two', basic: 'Basic, as'});
export const SceneWePh: React.FC = () => {
	const strip = EQ_HYD(K9.two + 30);
	const ss = fitSize(strip, 820, 32);
	const pohT = 'pOH = −log(5.3 × 10^{−6})';
	return (
		<Overlay>
			<TaskLine text={TASK13} at={-100} />
			<StepAfter size={70} task={TASK13} text="Step 2 of 2: pH" at={K9.two} />
			<DimG at={0} to={0.42}>
				<GCard x={GX} y={GY} w={GW} size={GS} lh={GLH} at={-100} lines={GIV13.map((t, i) => ({t, at: -100, lit: i === 2 ? [K9.over - 10, K9.hyd] as [number, number] : undefined}))} />
			</DimG>
			<DimG at={K9.over} to={0.4} undim={K9.sqrt + 30}>
				<KeptChip x={1000} y={250} text={KEPT13} at={-100} color={TEAL} size={34} pulse={K9.sqrt + 40} />
			</DimG>
			<EqLine items={strip} x={1000} y={450} size={ss} />
			<Note x={96} y={548} text="Ka and pKa video: Ka × Kb = Kw" size={28} color={INK_SOFT} at={K9.kb + 20} out={K9.hyd} />
			<Note x={96} y={548} text="weak base method" size={28} color={INK_SOFT} at={K9.hyd} out={K9.poh} />
			<WLine x={96} y={620} size={36} dim={K9.hyd} items={P('Kb = Kw ÷ Ka = 1.0 × 10^{−14} ÷ 1.8 × 10^{−5}', K9.over, {t: '= 5.6 × 10^{−10}', color: NAVY}, K9.r56)} />
			<WLine x={96} y={700} size={36} dim={K9.poh} items={P('[OH^{−}] = √(Kb × c) = √(5.6 × 10^{−10} × 0.0500)', K9.sqrt + 20, {t: '= 5.3 × 10^{−6} mol/L', color: BASE_INK}, K9.r53)} />
			<WLine x={96} y={780} size={36} dim={K9.ph} items={P(pohT, K9.poh + 10, {t: '= 5.28', color: INK}, K9.r528)} />
			<Note x={96 + mw(pohT + ' = 5.28', 36, false, 700) + 60} y={780} text="[OH^{−}] 2 s.f. → 2 d.p." size={28} color={INK_SOFT} at={K9.r528 + 10} out={K9.basic} />
			<WLine x={96} y={860} size={36} items={P('pH = 14.00 − 5.28', K9.ph, {t: '= 8.72', color: TEAL}, K9.r872)} />
			<AChip x={1000} y={330} text="pH at equivalence = 8.72" size={36} color={TEAL} hand={false} at={K9.r872 + 20} />
			{void K9.method}
		</Overlay>
	);
};

// ---------- the main graph (scenes 10 and 11; C14 imports its curves, not its layout) ----------
export const G13: GG = {x: 250, y: 250, w: 1150, h: 600, x0: 0, x1: 50, y0: 0, y1: 14};
export const XLAB = 'volume of 0.100 mol/L NaOH added (mL)';
export const AX = {xTicks: [0, 10, 20, 30, 40, 50], yTicks: [0, 2, 4, 6, 8, 10, 12, 14]};
const INS = {x: 1470, y: 300, w: 400, h: 430};

// ---------- 10. The jump, and why methyl orange misleads ----------
const S10 = 'the-jump';
const K10 = cues(sc(S10), {here: "Here's the whole", leaps: 'the pH leaps', before: 'one drop before', after: 'one drop after', phth: 'Phenolphthalein changes', inside: 'inside that leap', mo: 'Methyl orange changes', buffer: 'buffer region', small: 'far too small', low: 'too low'});
export const SceneJump: React.FC = () => {
	const g = G13;
	const gi: GG = {x: INS.x + 70, y: INS.y + 50, w: INS.w - 100, h: INS.h - 130, x0: 24.9, x1: 25.1, y0: 5.5, y1: 11};
	const FX = fine(24.9, 25.1, 400);
	const mo = litRange(phEth, 3.1, 4.4, 0, 24);
	return (
		<Overlay>
			<Axes g={g} at={0} xTicks={AX.xTicks} yTicks={AX.yTicks} xLabel={XLAB} yLabel="pH" />
			<Curve g={g} fn={phEth} xs={XS25} color={ETH_C} at={10} dur={70} />
			<Sx x={gx(g, 50) - 6} y={gy(g, 12.5) - 18} text="CH_3COOH" size={28} color={ETH_C} anchor="end" weight={800} at={80} />
			<AChip x={1470} y={210} text="pH at equivalence = 8.72" size={28} color={TEAL} hand={false} at={4} />
			<Band g={g} lo={8.3} hi={10.0} cLo={CLEAR} cHi={PINK} at={K10.phth} label="phenolphthalein 8.3–10.0" labelColor={PINK_INK} o={fr => 1 - 0.5 * prog(fr, K10.mo, 14)} />
			<Lit g={g} fn={phEth} xs={XS25} lo={8.3} hi={10.0} color={PINK} at={K10.inside} />
			<Inset x={INS.x} y={INS.y} w={INS.w} h={INS.h} from={[gx(g, 25), gy(g, 8.7)]} at={K10.leaps} o={fr => 1 - 0.65 * prog(fr, K10.mo, 14)} title="one drop either side">
				<Axes g={gi} at={K10.leaps} xTicks={[24.9, 25.0, 25.1]} yTicks={[6, 7, 8, 9, 10, 11]} xLabel="mL" yLabel="" size={20} xFmt={n => n.toFixed(1)} />
				<Band g={gi} lo={8.3} hi={10.0} cLo={CLEAR} cHi={PINK} at={K10.phth} />
				<Curve g={gi} fn={phEth} xs={FX} color={ETH_C} at={K10.leaps + 10} dur={30} width={5} />
				<Lit g={gi} fn={phEth} xs={FX} lo={8.3} hi={10.0} color={PINK} at={K10.inside} width={11} />
				<GDot g={gi} v={24.95} p={phEth(24.95)} at={K10.before + 10} color={INK} r={8} label="24.95 mL: 7.4" dx={14} dy={10} size={21} />
				<GDot g={gi} v={25.05} p={phEth(25.05)} at={K10.after + 10} color={INK} r={8} label="25.05 mL: 10.0" dx={-14} dy={-8} anchor="end" size={21} />
				<GDot g={gi} v={25.0} p={phEth(25.0)} at={K10.after + 30} color={TEAL} r={8} label="25.00 mL: 8.72" dx={12} dy={30} size={19} />
				<path d={`M${gx(gi, 24.95)},${gy(gi, 6.6)} L${gx(gi, 24.95)},${gy(gi, 6.35)} L${gx(gi, 25.05)},${gy(gi, 6.35)} L${gx(gi, 25.05)},${gy(gi, 6.6)}`} fill="none" stroke={INK} strokeWidth={3} opacity={prog(useCurrentFrame(), K10.after + 20, 10)} />
				<Sx x={gx(gi, 25.0)} y={gy(gi, 6.35) + 26} text="one drop" size={21} color={INK} anchor="middle" weight={800} at={K10.after + 24} />
			</Inset>
			<Band g={g} lo={3.1} hi={4.4} cLo={MO_RED} cHi={MO_YEL} at={K10.mo} label="methyl orange 3.1–4.4" labelColor={MO_RED} />
			<Lit g={g} fn={phEth} xs={XS25} lo={3.1} hi={4.4} color={MO_RED} at={K10.buffer - 6} range={mo} grad={[MO_RED, MO_YEL]} />
			<Note x={gx(g, 1)} y={gy(g, 6.9)} text="buffer region: acid and ethanoate both present" size={28} color={INK} at={K10.buffer + 6} />
			<Drop g={g} v={mo[1]} p={4.4} at={K10.small} color={MO_RED} xLabel="≈ 8 mL" size={26} />
			<AChip x={gx(g, 27)} y={gy(g, 2.4)} text="titre about 8 mL, not 25.00 mL" size={32} color={MO_RED} hand={false} at={K10.low - 10} />
			<SetRing p={MO_SET} u={SET_U.mo} x={1530} y={770} h={110} at={K10.mo} pos={fr => 2 * smooth(prog(fr, K10.low - 6, 50))} ringAt={K10.low - 6} />
			{void K10.here}
		</Overlay>
	);
};

// ---------- 11. The rule, and strong acid with strong base ----------
const S11 = 'the-rule';
const K11 = cues(sc(S11), {rule: 'the rule', inside: 'inside the steep', range: 'Its range', hcl: 'For hydrochloric', four: 'four to ten', mo: 'methyl orange', btb: 'bromothymol blue', phth: 'phenolphthalein all', drop: 'a drop'});
export const SceneRule: React.FC = () => {
	const g = G13;
	const gi: GG = {x: INS.x + 70, y: INS.y + 50, w: INS.w - 100, h: INS.h - 130, x0: 24.5, x1: 25.1, y0: 2, y1: 11};
	const FX = fine(24.5, 25.1, 600);
	const bandO = (fr: number) => 1 - 0.5 * prog(fr, K11.drop + 20, 14);
	const IND = [
		{lo: 3.1, hi: 4.4, cA: MO_RED, cB: MO_YEL, n: 'methyl orange', at: K11.mo},
		{lo: 6.0, hi: 7.6, cA: BTB_YEL, cB: BTB_BLUE, n: 'bromothymol blue', at: K11.btb},
		{lo: 8.3, hi: 10.0, cA: '#e9b9d4', cB: PINK, n: 'phenolphthalein', at: K11.phth},
	];
	return (
		<Overlay>
			<AChip x={250} y={140} text="Indicator: its colour change must fall inside the jump" size={38} color={TEAL} hand={false} at={K11.rule + 20} />
			<Axes g={g} at={-100} xTicks={AX.xTicks} yTicks={AX.yTicks} xLabel={XLAB} yLabel="pH" />
			<Curve g={g} fn={phEth} xs={XS25} color={ETH_C} at={-100} o={fr => 1 - 0.75 * prog(fr, 10, 20)} />
			<Curve g={g} fn={phHCl} xs={XS25} color={HCL_C} at={30} dur={70} />
			<Sx x={gx(g, 50) - 6} y={gy(g, 12.5) - 18} text="HCl" size={28} color={HCL_C} anchor="end" weight={800} at={100} />
			<Sx x={gx(g, 2)} y={gy(g, 3.4) - 10} text="CH_3COOH" size={26} color={ETH_C} anchor="start" weight={700} at={-100} opacity={0.4} />
			<JumpBracket x={gx(g, 25) - 24} y1={gy(g, 10)} y2={gy(g, 4)} at={K11.four} text="about pH 4 to 10" side="l" color={HCL_C} size={30} />
			{IND.map((b, i) => (
				<React.Fragment key={i}>
					<Band g={g} lo={b.lo} hi={b.hi} cLo={b.cA} cHi={b.cB} at={b.at} label={b.n} labelColor={hexDark(b.cB)} o={bandO} labelSize={24} />
					<Lit g={g} fn={phHCl} xs={XS25} lo={b.lo} hi={b.hi} color={b.cB} at={b.at + 14} grad={[b.cA, b.cB]} />
				</React.Fragment>
			))}
			<Inset x={INS.x} y={INS.y} w={INS.w} h={INS.h} from={[gx(g, 25), gy(g, 6)]} r={30} at={K11.mo - 10} title="HCl near equivalence">
				<rect x={gx(gi, 24.95)} y={gi.y} width={gx(gi, 25.05) - gx(gi, 24.95)} height={gi.h} fill={INK} opacity={0.08} />
				<Axes g={gi} at={K11.mo - 10} xTicks={[24.6, 24.8, 25.0]} yTicks={[2, 4, 6, 8, 10]} xLabel="mL" yLabel="" size={20} xFmt={n => n.toFixed(1)} />
				<Curve g={gi} fn={phHCl} xs={FX} color={HCL_C} at={K11.mo - 4} dur={24} width={5} />
				{IND.map((b, i) => <Lit key={i} g={gi} fn={phHCl} xs={FX} lo={b.lo} hi={b.hi} color={b.cB} at={b.at + 14} grad={[b.cA, b.cB]} width={11} />)}
				<Sx x={gx(gi, 24.95) - 8} y={gi.y + 24} text="one-drop bracket" size={19} color={INK} anchor="end" weight={800} at={K11.mo} />
			</Inset>
			<Note x={250} y={975} text="Methyl orange starts changing before the one-drop bracket and finishes near equivalence." size={32} color={INK} at={K11.drop - 20} />
			<Note x={250} y={1025} text="Bromothymol blue and phenolphthalein change within the bracket." size={32} color={INK} at={K11.drop} />
			{void K11.inside}{void K11.range}
		</Overlay>
	);
};
const hexDark = (c: string) => (c === PINK ? PINK_INK : c === MO_YEL ? MO_RED : c === BTB_BLUE ? '#245a99' : c);

// ---------- 12. Memory aid ----------
const S12 = 'memory-aid';
const K12 = cues(sc(S12), {here: "here's what", salt: 'The salt takes', basic: 'makes it basic', acidic: 'makes it acidic', neutral: 'make it neutral', pick: 'pick the indicator'});
export const SceneAid: React.FC = () => {
	const gm: GG = {x: 1600, y: 770, w: 230, h: 130, x0: 0, x1: 50, y0: 0, y1: 14};
	return (
		<Overlay>
			<DimG at={K12.pick} to={0.55}>
				<Note x={960} y={300} text="The salt takes after its stronger parent." size={72} color={TEAL} anchor="middle" at={K12.salt - 4} />
				<Tree x={400} y={430} a={{t: 'CH_3COOH', strong: false}} b={{t: 'NaOH', strong: true}} res="basic" color={BASE_INK} at={K12.basic - 50} lit={K12.basic} />
				<Tree x={960} y={430} a={{t: 'HCl', strong: true}} b={{t: 'NH_3', strong: false}} res="acidic" color={ACID_INK} at={K12.acidic - 50} lit={K12.acidic} />
				<Tree x={1520} y={430} a={{t: 'HCl', strong: true}} b={{t: 'NaOH', strong: true}} res="neutral" color={INK} at={K12.neutral - 30} lit={K12.neutral} />
				<Note x={960} y={720} text="one strong parent; two weak parents: need Ka and Kb" size={30} color={INK_SOFT} anchor="middle" at={K12.neutral + 20} />
			</DimG>
			<Note x={900} y={860} text="Pick the indicator that changes inside the jump." size={56} color={INK} anchor="middle" at={K12.pick} />
			<Axes g={gm} at={K12.pick + 10} xTicks={[]} yTicks={[]} xLabel="" yLabel="" size={16} grid={false} />
			<Curve g={gm} fn={phEth} xs={XS25} color={ETH_C} at={K12.pick + 14} dur={30} width={3} />
			<Lit g={gm} fn={phEth} xs={XS25} lo={8.3} hi={10.0} color={PINK} at={K12.pick + 46} width={8} />
			{void K12.here}{void INK}{void picW}{void UNK}{void GDot}{void Drop}{void KeptChip}
		</Overlay>
	);
};
