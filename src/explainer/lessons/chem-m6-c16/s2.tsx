// M6 C16 scenes 6 to 9: which titration (the amount branch splits three ways, each to a method chip with its sample
// and apparatus); red wine worked through the rule (degassing, a probe titration to the pH 8.2 endpoint, acids
// counted together, the crossed chip); Aboriginal and Torres Strait Islander knowledge (principle only: an abstract
// observe, test, pass on cycle, the Module 5 cycad callback, a generic proton hop); the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, kf, sc} from './common';
import {ANTACID, COND, CYCAD, PHTH, RWGLASS, VINEGAR} from './assets';
import {
	AChip, AMBER, AMBER_INK, AMT_C, Axes, Blot, CO2Tok, Curve, Cycle, DimG, EqLine, Fade, Fork, FullMeter, INK, INK_SOFT, MistakeX, MolesBar, Note, OHg, Overlay, PH_C, PhmTint, PicH, PlateAt,
	ProtonHop, Rig, ShrinkAt, Split3, Sx, TEAL, TFlask, TaskLine, clamp01, eq, fitSize, gx, gy, lerp, picW, smooth,
} from './parts';
import type {GG} from './parts';
import {fine} from '../chem-m6-c13/curves';

// ---------- the decision tree (scene 6, small in scene 7) ----------
const F6 = {x0: 100, y0: 540, x1: 360, yU: 300, yL: 540};
const YS: [number, number, number] = [300, 540, 800];
const CX = 660;
type TreeT = {q: [number, number, number]; a: [number, number, number]; dimU: number; litL?: number; lit?: (number | undefined)[]};
const Tree: React.FC<{t: TreeT}> = ({t}) => (
	<>
		<Fork g={F6} at={-100} atU={-100} atL={-100} labU="pH" labL="amount" size={30} dimU={t.dimU} litL={t.litL} />
		<Split3 x0={F6.x1 + 20} y0={F6.yL} x1={CX - 20} ys={YS} at={t.q} labels={['clear, soluble, fast', 'insoluble or slow solid', 'coloured or cloudy']} lit={t.lit} />
		<AChip x={CX} y={YS[0] - 27} text="direct titration + indicator" size={34} color={INK} hand={false} at={t.a[0]} />
		<AChip x={CX} y={YS[1] - 27} text="back titration" size={34} color={INK} hand={false} at={t.a[1]} />
		<AChip x={CX} y={YS[2] - 27} text="titrate with a meter" size={34} color={INK} hand={false} at={t.a[2]} />
	</>
);

// ---------- 6. Which titration? Let the sample decide ----------
const S6 = 'which-titration';
const K6 = cues(sc(S6), {need: 'If you need', look: 'look at', dissolve: 'Does it dissolve', directly: 'directly', vinegar: 'like vinegar', insoluble: 'Is it an insoluble', back: 'back titrate', coloured: 'Is it coloured', meter: 'a meter', ph: 'a pH probe', cond: 'a conductivity meter', soft: 'soft drink', boil: 'boil off'});
export const SceneWhich: React.FC = () => (
	<Overlay>
		<Tree t={{q: [K6.dissolve, K6.insoluble, K6.coloured], a: [K6.directly, K6.back, K6.meter], dimU: K6.look}} />
		<PlateAt p={VINEGAR} x={1180} y={200} h={160} at={K6.vinegar} />
		<Rig tx={1360} ty={290} bh={200} fh={100} level={() => 0} at={K6.directly + 6} clearAt={-100} />
		<Note x={CX} y={YS[0] + 76} text="titration video" size={26} color={INK_SOFT} at={K6.directly + 10} out={K6.insoluble} hand={false} />
		<PlateAt p={ANTACID} x={1180} y={480} h={110} at={K6.back} />
		<MolesBar x={1380} y={515} w={220} h={44} at={K6.back + 6} split={K6.back + 20} inner={false} />
		<Note x={CX} y={YS[1] + 76} text="total minus leftover" size={26} color={INK_SOFT} at={K6.back + 10} out={K6.coloured} hand={false} />
		<FullMeter x={1150} y={720} h={150} at={K6.ph} read={() => ''} />
		<Sx x={1150 + 82} y={905} text="pH: find the jump" size={26} color={PH_C} anchor="middle" weight={700} at={K6.ph + 10} />
		<PlateAt p={COND} x={1500} y={705} h={165} at={K6.cond} />
		<Sx x={1500 + picW(COND, 165) / 2} y={945} text="conductivity: where the lines cross" size={26} color={INK} anchor="middle" weight={700} at={K6.cond + 10} />
		<Note x={CX} y={YS[2] + 76} text="back and conductivity titrations video" size={26} color={INK_SOFT} at={K6.meter + 10} out={K6.soft} hand={false} />
		<Note x={100} y={1010} text="soft drink: boil off CO_2 first (H_2CO_3 would titrate too)" size={30} color={INK_SOFT} at={K6.soft + 10} hand={false} />
		{void K6.need}{void K6.boil}
	</Overlay>
);

// ---------- 7. Worked justification: red wine ----------
const S7 = 'red-wine';
const K7 = cues(sc(S7), {tryit: 'Try it', total: 'total acid', amount: 'an amount', wine: 'Wine reacts', dark: 'dark red', hard: 'hard to see', co2: 'carbon dioxide', titrate: 'Then titrate', probe: 'pH probe', titre: 'The titre', tit: 'titratable acidity', separately: 'separately', tartaric: 'Tartaric', together: 'together', either: 'pH either'});
const GW7: GG = {x: 1110, y: 660, w: 560, h: 220, x0: 0, x1: 16, y0: 2, y1: 10};
const wineCurve = (v: number) => 3.4 + 4.8 * Math.pow(Math.min(v, 13) / 13, 2.4) + Math.max(0, v - 13) * 0.6;
const WX = fine(0, 13, 130);
const ACIDS: [string, number][] = [['tartaric', 600], ['malic', 760], ['others', 920]];
export const SceneWine: React.FC = () => {
	const f = useCurrentFrame();
	const FX = 980, FY = 330, FH = 240;
	const fc = FX + picW(PHTH.clear, FH) / 2;
	const merge = smooth(clamp01((f - K7.together - 10) / 24));
	const BY = 690;
	return (
		<Overlay>
			<TaskLine text="Red wine: total acid?" at={K7.tryit} size={56} />
			<ShrinkAt cx={100} cy={200} k={0.45} at={-100}>
				<Tree t={{q: [-100, -100, -100], a: [-100, -100, -100], dimU: -100, litL: K7.total, lit: [undefined, undefined, K7.hard]}} />
			</ShrinkAt>
			<PlateAt p={RWGLASS} x={700} y={250} h={360} at={K7.tryit + 6} />
			<DimG at={K7.probe} to={0.35}>
				<Fade at={K7.dark}>
					<TFlask x={FX} y={FY} h={FH} red={() => 1} />
				</Fade>
				<Blot x={fc} y0={FY - 50} y1={FY + FH * 0.62} at={K7.hard} />
				{[0, 1, 2, 3, 4].map(i => {
					const t = clamp01((f - K7.co2 - i * 8) / 50);
					if (t <= 0 || t >= 1) return null;
					return <CO2Tok key={i} x={fc - 20 + i * 10 + Math.sin(t * 6 + i) * 8} y={lerp(FY + FH * 0.75, FY - 120, t)} s={1.1} o={1 - t * t} />;
				})}
			</DimG>
			<Note x={940} y={630} text="degassed first: dissolved CO_2 would titrate too" size={30} color={INK_SOFT} at={K7.co2 + 10} out={K7.probe} hand={false} />
			<FullMeter x={1250} y={220} h={300} at={K7.probe} read={fr => (fr < K7.probe + 20 ? '' : kf(fr, [[K7.probe + 20, 3.4], [K7.probe + 70, 8.2]]).toFixed(1))} />
			<PhmTint x={1250} y={220} h={300} o={prog(f, K7.probe, 14)} />
			<Note x={1250 + 164} y={565} text="calibrated" size={28} color={TEAL} anchor="middle" at={K7.probe + 10} />
			<DimG at={K7.together} to={0.35}>
				<Axes g={GW7} at={K7.probe + 4} xTicks={[]} yTicks={[]} xLabel="" yLabel="pH" grid={false} size={22} />
				<Curve g={GW7} fn={wineCurve} xs={WX} color={RWINE_LINE} at={K7.probe + 20} dur={50} to={13} width={5} />
				<Fade at={K7.probe + 10}>
					<line x1={GW7.x} y1={gy(GW7, 8.2)} x2={GW7.x + GW7.w} y2={gy(GW7, 8.2)} stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
				</Fade>
				<Sx x={GW7.x + GW7.w} y={gy(GW7, 8.2) - 32} text="endpoint: pH 8.2 (Australian AWRI method)" size={24} color={INK} anchor="end" weight={700} at={K7.probe + 14} />
				<Sx x={GW7.x + 14} y={gy(GW7, 8.2) + 34} text="OIV method: pH 7.0" size={22} color={INK_SOFT} weight={600} at={K7.probe + 24} />
				<Fade at={K7.probe + 70}>
					<circle cx={gx(GW7, 13)} cy={gy(GW7, 8.2)} r={18} fill="none" stroke="#ffffff" strokeWidth={7} />
					<circle cx={gx(GW7, 13)} cy={gy(GW7, 8.2)} r={18} fill="none" stroke={INK} strokeWidth={3.5} />
				</Fade>
				<Sx x={GW7.x + GW7.w} y={gy(GW7, 8.2) + 40} text="endpoint read on the meter" size={24} color={INK_SOFT} anchor="end" weight={700} at={K7.probe + 76} />
				<Sx x={GW7.x} y={GW7.y + GW7.h + 44} text="titratable acidity to pH 8.2" size={30} color={AMT_C} weight={800} at={K7.tit + 6} />
			</DimG>
			{ACIDS.map(([t, x], i) => {
				const at = K7.tartaric + i * 14;
				const o = prog(f, at, 12) * (1 - merge);
				const oh = smooth(clamp01((f - (K7.together - 40 + i * 6)) / 18));
				if (o <= 0.01) return null;
				return (
					<g key={i} opacity={o} transform={`translate(${lerp(0, 780 - x, merge)},0)`}>
						<circle cx={x} cy={BY + 30} r={34} fill="#fff4dc" stroke={AMBER} strokeWidth={4} />
						<Sx x={x} y={BY + 38} text={t} size={22} color={AMBER_INK} anchor="middle" weight={800} at={-1000} />
						{oh > 0.01 ? <OHg x={lerp(x + 70, x + 40, oh)} y={lerp(BY - 30, BY + 4, oh)} s={1.0} o={oh} /> : null}
					</g>
				);
			})}
			<Fade at={K7.together + 20}>
				<rect x={560} y={BY + 6} width={440 * merge} height={50} rx={10} fill={AMT_C} opacity={0.85} />
				<Sx x={560} y={BY + 96} text="titratable acidity (total acid)" size={30} color={AMT_C} weight={800} at={K7.together + 30} />
				<Sx x={560} y={BY + 126} text="what the titre establishes" size={24} color={INK_SOFT} weight={700} at={K7.together + 36} />
			</Fade>
			<MistakeX x={560} y={860} text="each acid separately? the pH?" at={K7.either - 10} cross={K7.either + 10} note="not from a titre" size={32} />
			{void K7.amount}{void K7.wine}{void K7.titrate}{void K7.titre}{void K7.separately}{void PicH}
		</Overlay>
	);
};
const RWINE_LINE = '#8f1f3a';

// ---------- 8. Aboriginal and Torres Strait Islander knowledge (principle only; owner decision 21 Oct) ----------
const S8 = 'aboriginal-knowledge';
const K8 = cues(sc(S8), {glass: 'glassware', syllabus: 'The syllabus', observing: 'observing', testing: 'testing', passing: 'passing on', held: 'still held', belongs: 'belongs', cycad: 'cycad leaching', module: 'Module 5', solubility: 'solubility', where: 'Where a', protons: 'protons', behaves: 'behaves'});
export const SceneKnowledge: React.FC = () => {
	const f = useCurrentFrame();
	const e = eq(['acid-H^{+}', '+', 'base', '<=>', 'acid^{−}', '+', 'base-H^{+}'], [K8.protons, K8.protons + 8, K8.protons + 12, K8.protons + 20, K8.protons + 26, K8.protons + 30, K8.protons + 34]);
	const es = fitSize(e, 720, 40);
	return (
		<>
			<Heading text="Aboriginal and Torres Strait Islander chemical knowledge" at={K8.syllabus + 20} size={50} />
			<Overlay>
				<rect x={0} y={180} width={1920} height={900} fill="#f3e6cf" opacity={0.35 * prog(f, 0, 30)} />
				<DimG at={K8.module} to={0.5}>
					<Cycle cx={560} cy={520} R={200} labels={['observe', 'test', 'pass on']} at={[K8.observing, K8.testing, K8.passing]} />
				</DimG>
				<DimG at={K8.belongs} to={0.4}>
					<Note x={560} y={830} text="knowledge built and passed on over many generations" size={34} color={INK} anchor="middle" at={K8.observing + 30} />
				</DimG>
				<Note x={560} y={895} text="held by the communities who developed it" size={36} color={TEAL} anchor="middle" at={K8.belongs + 6} />
				<PlateAt p={CYCAD} x={1150} y={220} h={200} at={K8.module} />
				<Note x={1150} y={470} text="Module 5: cycad leaching uses solubility, not acid-base" size={28} color={INK_SOFT} at={K8.module + 10} out={K8.where} />
				<EqLine items={e} x={1060} y={640} size={es} />
				<ProtonHop x1={1230} x2={1560} y={790} at={K8.protons + 10} hop={K8.protons + 40} />
				<Note x={1395} y={900} text="a base takes a proton" size={34} color={INK} anchor="middle" at={K8.protons + 50} />
				{void K8.glass}{void K8.held}{void K8.cycad}{void K8.solubility}{void K8.behaves}
			</Overlay>
		</>
	);
};

// ---------- 9. Memory aid ----------
const S9 = 'memory-aid';
const K9 = cues(sc(S9), {so: "So here's", ph: 'pH tells', much: 'how much', probe: 'A probe senses', titr: 'A titration reacts', strong: 'For a strong', weak: 'For a weak', let: 'let the sample'});
export const SceneAid: React.FC = () => (
	<Overlay>
		<DimG at={K9.let} to={0.55}>
			<Note x={960} y={300} text="pH tells you how acidic; a titration tells you how much." size={64} color={TEAL} anchor="middle" at={K9.ph} />
			<Fork g={{x0: 640, y0: 500, x1: 940, yU: 420, yL: 580}} at={K9.much + 20} atU={K9.probe} atL={K9.titr} labU="" labL="" />
			<Note x={970} y={432} text="a probe: the H_3O^{+} in solution now" size={34} color={PH_C} at={K9.probe + 10} hand={false} />
			<Note x={970} y={592} text="a titration: every acid molecule" size={34} color={AMT_C} at={K9.titr + 10} hand={false} />
			<Note x={960} y={720} text="for weak acids, these give very different numbers" size={32} color={INK_SOFT} anchor="middle" at={K9.weak} hand={false} />
		</DimG>
		<Note x={960} y={850} text="clear → direct | slow solid → back | coloured → meter" size={46} color={INK} anchor="middle" at={K9.let} />
		{void K9.so}{void K9.strong}{void INK}
	</Overlay>
);
