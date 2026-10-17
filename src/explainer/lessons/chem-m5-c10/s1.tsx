import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, EqStrip, Frac, Overlay, eqLayout, fracGeom} from '../chem-m5-c05/parts';
import type {EqItem, Term} from '../chem-m5-c05/parts';
import {MistakeChip} from '../chem-m5-g03c/board';
import {Grid100} from '../chem-m5-p02/parts';
import {AcidLens, Bubbles, Fade, KName, PicH, Ring, Sx, TEAL, Tick, Tray, TwoWay, dynamicSplit, picW} from './parts';
import {ANION, ANION_INK, CROSS, HPLUS, HPLUS_INK, Heading, MOL, WATERC, WATER_INK, sc} from './common';
import {STRONG_MG, VINEGAR, WEAK_MG} from './assets';

export const HA_EQ: EqItem[] = [{k: 'sp', t: 'HA(aq)', color: MOL}, {k: 'arrow'}, {k: 'sp', t: 'H^{+}(aq)', color: HPLUS_INK}, {k: 'plus'}, {k: 'sp', t: 'A^{-}(aq)', color: ANION_INK}];
export const HAW_EQ: EqItem[] = [{k: 'sp', t: 'HA(aq)', color: MOL}, {k: 'plus'}, {k: 'sp', t: 'H_2O(l)', color: WATER_INK}, {k: 'arrow'}, {k: 'sp', t: 'H_3O^{+}(aq)', color: HPLUS_INK}, {k: 'plus'}, {k: 'sp', t: 'A^{-}(aq)', color: ANION_INK}];
/** Centre (x, baseline y) of species i in an equation strip laid out at x0. */
export const spCentre = (items: EqItem[], i: number, size: number, x0: number, y: number): [number, number] => {
	const p = eqLayout(items, size, x0).pos[i];
	return [p.sx + p.w / 2, y - size * 0.3];
};
export const withAt = (items: EqItem[], ats: number[]): EqItem[] => items.map((it, i) => ({...it, at: ats[i]}) as EqItem);
/** Ka = [H+][A-] / [HA] (or with H3O+), built by flying terms from an equation strip. */
export const KaFrac: React.FC<{cx: number; cy: number; size: number; name: string; prefixAt: number; num: Term[]; den: Term[]; barAt: number; nameAt?: number; color?: string}> = ({cx, cy, size, name, prefixAt, num, den, barAt, nameAt, color = TEAL}) => {
	const g = fracGeom(cx, cy, size, num, den);
	return (
		<g>
			<KName x={g.x1 - size * 0.95} y={cy + size * 0.3} name={name} size={size} color={color} at={prefixAt} nameAt={nameAt} anchor="end" />
			<Sx x={g.x1 - size * 0.25} y={cy + size * 0.3} text="=" size={size} anchor="end" at={prefixAt} />
			<Frac cx={cx} cy={cy} size={size} num={num} den={den} barAt={barAt} />
		</g>
	);
};

// ---------- 1. Hook: same concentration, different fizz ----------
const H = 'hook';
const K1 = cues(sc(H), {both: 'both at 0.10', piece: 'same piece of magnesium', hcl: 'In hydrochloric acid', hard: 'fizzes hard', acetic: 'In acetic acid', vinegar: 'acid in vinegar', slowly: 'fizzes slowly', sameC: 'Same concentration', why: 'why the difference', answer: 'The answer is', name: 'its own name'});
const BK = {h: 560, y: 270, xs: 150, xw: 720};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const w = picW(STRONG_MG, BK.h);
	const pulse = (at: number) => 1 + 0.12 * Math.max(0, Math.sin(Math.min(1, Math.max(0, f - at) / 24) * Math.PI));
	const rib = (x: number): [number, number] => [x + w * 0.5, BK.y + BK.h * 0.6];
	return (
		<>
			<Heading text="Same acid concentration. Why a different fizz?" at={4} size={56} />
			<Overlay>
				<Fade at={6}><PicH p={STRONG_MG} x={BK.xs} y={BK.y} h={BK.h} /></Fade>
				<Fade at={12}><PicH p={WEAK_MG} x={BK.xw} y={BK.y} h={BK.h} /></Fade>
				<Bubbles x={BK.xs} y={BK.y} h={BK.h} p={STRONG_MG} at={K1.hard} rate={1} seed={3} />
				<Bubbles x={BK.xw} y={BK.y} h={BK.h} p={WEAK_MG} at={K1.slowly} rate={0.2} seed={8} />
				<Sx x={BK.xs} y={890} text="hydrochloric acid, HCl" size={34} weight={700} at={K1.hcl} />
				<Sx x={BK.xw} y={890} text="ethanoic (acetic) acid, CH_3COOH" size={34} weight={700} at={K1.acetic} />
				<g transform={`translate(${BK.xs + 90},928) scale(${pulse(K1.both)}) translate(${-(BK.xs + 90)},-928)`}><Sx x={BK.xs} y={940} text="0.10 mol/L" size={40} color={AMBER_INK} weight={800} at={K1.both} /></g>
				<g transform={`translate(${BK.xw + 90},928) scale(${pulse(K1.both)}) translate(${-(BK.xw + 90)},-928)`}><Sx x={BK.xw} y={940} text="0.10 mol/L" size={40} color={AMBER_INK} weight={800} at={K1.both} /></g>
				<Sx x={(BK.xs + BK.xw) / 2 + 110} y={940} text="=" size={56} color={AMBER_INK} anchor="middle" weight={800} at={K1.both + 8} />
				{/* the same magnesium in each */}
				<Sx x={(BK.xs + BK.xw + w) / 2} y={232} text="the same magnesium in each" size={38} color={INK_SOFT} anchor="middle" hand at={K1.piece} />
				<Arrow x1={(BK.xs + BK.xw + w) / 2 - 70} y1={246} x2={rib(BK.xs)[0] + 30} y2={rib(BK.xs)[1] - 120} at={K1.piece + 6} color={INK_SOFT} width={3.5} />
				<Arrow x1={(BK.xs + BK.xw + w) / 2 + 70} y1={246} x2={rib(BK.xw)[0] - 30} y2={rib(BK.xw)[1] - 120} at={K1.piece + 10} color={INK_SOFT} width={3.5} />
				<Sx x={BK.xs + w / 2} y={1010} text="fizzes hard" size={46} color={AMBER_INK} anchor="middle" hand at={K1.hard} />
				<Sx x={BK.xw + w / 2} y={1010} text="fizzes slowly" size={46} color={AMBER_INK} anchor="middle" hand at={K1.slowly} />
				{/* vinegar */}
				<Fade at={K1.vinegar}><PicH p={VINEGAR} x={1250} y={560} h={290} /></Fade>
				<Sx x={1250 + picW(VINEGAR, 290) / 2} y={890} text="vinegar" size={36} color={INK_SOFT} anchor="middle" hand at={K1.vinegar + 6} />
				<Arrow x1={1240} y1={700} x2={BK.xw + w - 10} y2={640} at={K1.vinegar + 8} color={INK_SOFT} width={3.5} />
				{/* the question */}
				<Sx x={1350} y={400} text="why the difference?" size={58} color={AMBER_INK} hand at={K1.why} />
				<Sx x={1350} y={470} text="an equilibrium..." size={40} color={INK} hand at={K1.answer} />
				<Chip x={1350} y={500} w={420} text="a K with its own name" size={38} color={TEAL} at={K1.name} />
			</Overlay>
		</>
	);
};

// ---------- 2. Strong and weak ----------
const SW = 'strong-weak';
const K2 = cues(sc(SW), {bubbles: 'The bubbles are hydrogen', meets: 'meets hydrogen ions', hplus: ['H plus', 1], water: 'In water', every: 'every hydrochloric acid molecule', breaks: 'breaks into ions', chl: 'and chloride', diss: 'called dissociating', ion: 'or ionising', allway: 'all the way', strong: 'strong acid', acetic: 'Acetic acid molecules', join: 'join back up', balance: 'two directions balance', whole: 'still whole', one: 'one in a hundred', fewer: 'far fewer', partly: 'only partly ionises', weak: 'weak acid'});
const L2 = {sx: 330, wx: 1110, cy: 430, r: 180};
const B2 = {h: 320, y: 720, sx: 210, wx: 990};
/** Hydrogen ions meet the magnesium surface and make a hydrogen bubble. */
const MeetPanel: React.FC<{at: number; out: number}> = ({at, out}) => {
	const f = useCurrentFrame();
	const t = Math.max(0, f - at);
	const X = 560, Y = 270, W = 330, Hh = 230;
	const cyc = (t % 70) / 70;
	return (
		<Fade at={at} out={out}>
			<rect x={X} y={Y} width={W} height={Hh} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
			<rect x={X + 20} y={Y + Hh - 54} width={W - 40} height={34} rx={6} fill="#b8bec6" stroke={INK} strokeWidth={2.5} />
			<Sx x={X + W / 2} y={Y + Hh - 30} text="magnesium" size={24} color={INK} anchor="middle" weight={700} at={at} />
			{[0, 1].map(k => {
				const u = Math.min(1, cyc * 1.6 + k * 0.3) % 1;
				const x = X + 90 + k * 140, y = Y + 40 + (Hh - 120) * Math.min(1, u * 1.4);
				return <circle key={k} cx={x} cy={y} r={10} fill={HPLUS} stroke={INK} strokeWidth={2} opacity={u < 0.75 ? 1 : 0} />;
			})}
			<circle cx={X + 160} cy={Y + Hh - 76 - cyc * 90} r={8 + 10 * cyc} fill="#ffffff" stroke="#8aa6b8" strokeWidth={2.5} opacity={cyc > 0.5 ? 1 : 0} />
			<Sx x={X + W / 2} y={Y - 14} text="H^{+} meets magnesium: H_2 bubble" size={28} color={HPLUS_INK} anchor="middle" hand at={at + 20} />
		</Fade>
	);
};
export const SceneStrongWeak: React.FC = () => {
	const f = useCurrentFrame();
	const wS = picW(STRONG_MG, B2.h);
	return (
		<>
			<Heading text="Strong and weak acids" at={4} size={62} />
			<Overlay>
				<Fade at={2}><PicH p={STRONG_MG} x={B2.sx} y={B2.y} h={B2.h} /></Fade>
				<Fade at={8}><PicH p={WEAK_MG} x={B2.wx} y={B2.y} h={B2.h} /></Fade>
				<Bubbles x={B2.sx} y={B2.y} h={B2.h} p={STRONG_MG} at={0} rate={1} seed={4} />
				<Bubbles x={B2.wx} y={B2.y} h={B2.h} p={WEAK_MG} at={0} rate={0.2} seed={9} />
				<MeetPanel at={K2.meets} out={K2.diss - 20} />
				<Sx x={720} y={380} text="dissociating (ionising):" size={34} color={INK} anchor="middle" hand at={K2.diss} />
				<Sx x={720} y={424} text="breaking apart into ions" size={34} color={INK} anchor="middle" hand at={K2.ion} />
				{/* HCl: every molecule splits */}
				<path d={`M${L2.sx},${L2.cy + L2.r + 60} L${B2.sx + wS / 2},${B2.y + B2.h * 0.5}`} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 6" opacity={prog(f, K2.water, 12)} />
				<AcidLens cx={L2.sx} cy={L2.cy} r={L2.r} n={8} seed={5} at={K2.water} split={(f, i) => prog(f, K2.breaks + i * 9, 14)} title="all split: no HCl molecules left" titleAt={K2.chl + 10} />
				<Sx x={B2.sx + wS + 30} y={830} text="strong acid" size={54} color={INK} hand at={K2.strong} />
				<Sx x={B2.sx + wS + 30} y={878} text="ionises completely" size={36} color={INK_SOFT} hand at={K2.strong + 10} />
				{/* acetic acid: splits and rejoins, mostly whole */}
				<path d={`M${L2.wx},${L2.cy + L2.r + 60} L${B2.wx + wS / 2},${B2.y + B2.h * 0.5}`} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 6" opacity={prog(f, K2.acetic, 12)} />
				<AcidLens cx={L2.wx} cy={L2.cy} r={L2.r} n={10} seed={6} at={K2.acetic} split={dynamicSplit(K2.acetic + 20, 46, [2, 6, 4, 8, 1, 9])} title="mostly whole molecules" titleAt={K2.whole} />
				<TwoWay x={L2.wx + L2.r + 22} y={L2.cy} w={110} at={K2.join} fwd="split" rev="join back up" />
				<Grid100 x={1570} y={590} cell={24} n={1} at={K2.one - 4} />
				<Sx x={1570} y={870} text="about 1 in 100 split" size={32} color={INK} hand at={K2.one + 6} />
				<Sx x={1570} y={906} text="(at 0.10 mol/L)" size={28} color={INK_SOFT} hand at={K2.one + 10} />
				<Sx x={B2.wx + wS + 30} y={830} text="weak acid" size={54} color={INK} hand at={K2.weak} />
				<Sx x={B2.wx + wS + 30} y={878} text="only partly ionises" size={36} color={INK_SOFT} hand at={K2.partly} />
				{/* far fewer hydrogen ions */}
				<Chip x={L2.sx - 110} y={184} w={220} h={56} text="lots of H^{+}" size={34} color={HPLUS_INK} at={K2.fewer} />
				<Chip x={L2.wx - 110} y={184} w={220} h={56} text="few H^{+}" size={34} color={HPLUS_INK} at={K2.fewer + 10} />
			</Overlay>
		</>
	);
};

// ---------- 3. Ka is just K ----------
const KK = 'ka-is-k';
const K3 = cues(sc(KK), {balance: 'A balance between', eq: 'is an equilibrium', hasK: 'it has a K', write: 'Write any weak acid', ha: ['H A', 1], splits: 'splits into', hp: ['H plus and', 1], am: ['A minus', 1], prod: 'Products over reactants', top1: 'H plus times', top2: ['A minus, over', 1], over: 'over H A', every: 'Every coefficient', nopow: 'no powers', called: 'This K is called', name: 'acid dissociation constant', little: 'the little a', notNew: 'not a new kind', rules: 'follows every rule', temp: 'changes only with temperature'});
const S3 = {x: 96, y: 360, s: 56};
export const SceneKaIsK: React.FC = () => {
	const c = (i: number) => spCentre(HA_EQ, i, S3.s, S3.x, S3.y);
	const num: Term[] = [{t: 'H^{+}', at: K3.top1, color: HPLUS_INK, from: c(2), faint1: K3.nopow + 20}, {t: 'A^{-}', at: K3.top2, color: ANION_INK, from: c(4), faint1: K3.nopow + 20}];
	const den: Term[] = [{t: 'HA', at: K3.over + 6, color: MOL, from: c(0), faint1: K3.nopow + 20}];
	const g = fracGeom(640, 620, 64, num, den);
	const rules = ['products over reactants', 'coefficients as powers', 'pure solids, pure liquids and the solvent left out', 'changes only with temperature'];
	const ruleAt = [K3.rules, K3.rules + 18, K3.rules + 36, K3.temp];
	return (
		<>
			<Heading text="Ka is just K" at={4} size={62} />
			<Overlay>
				<Sx x={96} y={240} text="molecules and ions in balance: an equilibrium, so it has a K" size={40} color={INK} hand at={K3.eq} />
				<EqStrip items={withAt(HA_EQ, [K3.ha, K3.splits, K3.hp, K3.am - 6, K3.am])} x={S3.x} y={S3.y} size={S3.s} />
				<Sx x={S3.x} y={S3.y + 54} text="any weak acid: HA" size={32} color={INK_SOFT} hand at={K3.ha + 14} />
				{/* the expression: products over reactants */}
				<Sx x={g.x1 - 20} y={620 + 20} text="K =" size={64} anchor="end" at={K3.prod} out={K3.called + 6} />
				<KaFrac cx={640} cy={620} size={64} name="a" prefixAt={K3.called + 6} num={num} den={den} barAt={K3.prod + 10} />
				<Sx x={96} y={780} text="every coefficient is 1, so no powers" size={36} color={INK_SOFT} hand at={K3.every} />
				<Sx x={96} y={850} text="acid dissociation constant" size={50} color={TEAL} hand at={K3.name} />
				<Sx x={96} y={900} text="the little a says which kind: an acid splitting into ions" size={32} color={INK_SOFT} hand at={K3.little} />
				{/* not a new kind of constant */}
				<Fade at={K3.notNew}>
					<rect x={1110} y={420} width={730} height={330} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
					<Sx x={1136} y={470} text="the rules from the expressions video" size={32} color={INK_SOFT} hand at={K3.notNew} />
					{rules.map((r, i) => (
						<g key={i}>
							<Sx x={1190} y={530 + i * 58} text={r} size={i === 2 ? 30 : 34} color={INK} hand at={K3.notNew + 6 + i * 4} />
							<Tick x={1160} y={520 + i * 58} at={ruleAt[i]} s={30} />
						</g>
					))}
				</Fade>
				<Sx x={1110} y={810} text="not a new kind of constant:" size={40} color={TEAL} hand at={K3.notNew + 10} />
				<Sx x={1110} y={858} text="Ka is K for an acid splitting into ions" size={40} color={TEAL} hand at={K3.notNew + 20} />
				<Sx x={96} y={990} text="acetic acid:   Ka = [H^{+}][CH_3COO^{-}] / [CH_3COOH]" size={34} color={INK} weight={600} at={K3.temp + 20} />
			</Overlay>
		</>
	);
};

// ---------- 4. Written with water ----------
const WW = 'with-water';
const K4 = cues(sc(WW), {also: 'You will also see', withW: 'written with water', haPlus: ['H A plus water', 1], makes: 'makes H three', am: ['and A minus', 1], h3o: 'H three O plus is just', carried: 'a hydrogen ion carried', does: 'So does water go', no: 'No', solvent: 'Water is the solvent', huge: 'huge, steady amount', stays: 'it stays out', expr: 'expressions video', kaIs: 'Ka is H three', times: 'times A minus', overHA: 'over H A', same: 'the same shape'});
const S4 = {x: 96, s: 46, y1: 240, y2: 330};
export const SceneWithWater: React.FC = () => {
	const f = useCurrentFrame();
	const c2 = (i: number) => spCentre(HAW_EQ, i, S4.s, S4.x, S4.y2);
	const att = prog(f, K4.h3o, 30);
	const WX = 1520, WY = 300;
	return (
		<>
			<Heading text="Written with water" at={4} size={62} />
			<Overlay>
				<EqStrip items={HA_EQ} x={S4.x} y={S4.y1} size={S4.s} at={-100} />
				<EqStrip items={withAt(HAW_EQ, [K4.haPlus, K4.haPlus + 20, K4.haPlus + 30, K4.makes, K4.makes + 10, K4.am, K4.am + 6])} x={S4.x} y={S4.y2} size={S4.s} />
				{/* H3O+ is a hydrogen ion carried by a water molecule */}
				<Fade at={K4.makes + 20}>
					<circle cx={WX} cy={WY} r={34} fill={WATERC} stroke={INK} strokeWidth={3} />
					<circle cx={WX - 34} cy={WY + 26} r={13} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />
					<circle cx={WX + 34} cy={WY + 26} r={13} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />
					<Sx x={WX} y={WY + 9} text="O" size={26} anchor="middle" weight={800} at={-100} />
					<circle cx={WX - 160 + 160 * att} cy={WY - 40 + 6 * att} r={13} fill={HPLUS} stroke={INK} strokeWidth={2.5} />
					<Sx x={WX - 170} y={WY - 66} text="H^{+}" size={30} color={HPLUS_INK} anchor="middle" weight={700} at={K4.makes + 20} out={K4.h3o + 20} />
					<Sx x={WX - 230} y={WY + 120} text="H_3O^{+} = H^{+} carried by water" size={36} color={HPLUS_INK} hand at={K4.carried} />
				</Fade>
				{/* does water go into Ka? */}
				<Sx x={96} y={450} text="Does water go into Ka?" size={48} color={AMBER_INK} hand at={K4.does} />
				<Sx x={560} y={450} text="No." size={60} color={CROSS} hand at={K4.no} />
				<KaFrac cx={560} cy={600} size={54} name="a" prefixAt={-100} barAt={-100} num={[{t: 'H^{+}', at: -100, color: HPLUS_INK}, {t: 'A^{-}', at: -100, color: ANION_INK}]} den={[{t: 'HA', at: -100, color: MOL}]} />
				<KaFrac cx={1300} cy={600} size={54} name="a" prefixAt={K4.kaIs} barAt={K4.kaIs + 10}
					num={[{t: 'H_3O^{+}', at: K4.kaIs + 26, color: HPLUS_INK, from: c2(4)}, {t: 'A^{-}', at: K4.times + 8, color: ANION_INK, from: c2(6)}]}
					den={[{t: 'HA', at: K4.overHA + 8, color: MOL, from: c2(0)}]} />
				<Fade at={K4.same}>
					<DrawPath d={`M380,740 Q380,770 420,770 L1460,770 Q1500,770 1500,740`} at={K4.same} dur={22} color={TEAL} width={5} />
					<Sx x={940} y={812} text="the same shape" size={42} color={TEAL} anchor="middle" hand at={K4.same + 12} />
				</Fade>
				<Tray x={96} y={850} w={420} at={K4.does} items={[{t: 'H_2O(l)', at: K4.no + 4, from: c2(2), color: WATER_INK}]} />
				<Sx x={560} y={1000} text="solvent: a huge, steady amount" size={34} color={INK_SOFT} hand at={K4.huge} />
				<MistakeChip x={620} y={860} text="[H_3O^{+}][A^{-}] / ([HA][H_2O])" size={32} at={K4.stays} note="water is the solvent: leave it out" />
			</Overlay>
		</>
	);
};
void ANION; void AMBER; void INK; void WATERC;
