import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, EqStrip, Line, Overlay} from '../chem-m5-c05/parts';
import type {EqItem, Term} from '../chem-m5-c05/parts';
import {MistakeChip} from '../chem-m5-g03c/board';
import {Grid100} from '../chem-m5-p02/parts';
import {AcidLens, AmmoniaLens, CrystalLens, Fade, KName, LogRuler, PicH, RMark, Ring, Sx, TEAL, Tick, Tray, TwoWay, dynamicSplit, picW, splitWin} from './parts';
import type {Ruler} from './parts';
import {AG_INK, ANION_INK, CL_INK, HPLUS_INK, Heading, MOL, OH_INK, WATER_INK, sc} from './common';
import {AMMONIA, FLASK, SATURATED, have} from './assets';
import {KaFrac, spCentre, withAt} from './s1';

export const R5: Ruler = {x0: 180, x1: 1740, y: 380, lo: -12, hi: 0};
export const ACETIC_LABEL = 'acetic acid: Ka = 1.8 × 10^{-5} (25 C)';

// ---------- 5a. What a small Ka tells you ----------
const KS = 'ka-size';
const K5 = cues(sc(KS), {read: 'read the size', anyK: 'any K', acetic: 'For acetic acid', ka: ['Ka is 1.8', 1], five: 'minus five', tiny: 'A tiny K', small: 'small top', big: 'big bottom', whole: 'still whole molecules'});
export const SceneKaSize: React.FC = () => {
	const f = useCurrentFrame();
	const pulse = 1 + 0.08 * Math.max(0, Math.sin(Math.min(1, Math.max(0, f - K5.small) / 30) * Math.PI));
	return (
		<>
			<Heading text="What a small Ka tells you" at={4} size={62} />
			<Overlay>
				<LogRuler R={R5} at={K5.read} tagAt={K5.anyK} />
				<RMark R={R5} v={1.8e-5} at={K5.ka + 10} label={ACETIC_LABEL} up={86} size={30} />
				{/* a tiny K: small top, big bottom */}
				<Fade at={K5.tiny}>
					<g transform={`translate(560,690) scale(${pulse}) translate(-560,-690)`}>
						<KName x={300} y={706} name="a" size={60} at={K5.tiny} anchor="end" />
						<Sx x={330} y={706} text="=" size={60} at={K5.tiny} />
						<Sx x={560} y={650} text="[H^{+}][A^{-}]" size={34} anchor="middle" weight={700} at={K5.small} />
						<DrawPath d="M390,690 L730,690" at={K5.tiny} dur={12} width={4} />
						<Sx x={560} y={790} text="[HA]" size={90} color={MOL} anchor="middle" weight={700} at={K5.big} />
					</g>
				</Fade>
				<Sx x={96} y={900} text="small top, big bottom:" size={40} color={INK} hand at={K5.big + 10} />
				<Sx x={96} y={950} text="most of the acid is still whole molecules" size={40} color={TEAL} hand at={K5.whole} />
				<AcidLens cx={1330} cy={720} r={190} n={12} seed={6} at={K5.tiny} split={dynamicSplit(K5.tiny, 50, [3, 7, 1, 9])} title="mostly whole molecules" titleAt={K5.whole} />
			</Overlay>
		</>
	);
};

// ---------- 5b. Comparing two weak acids ----------
const KC = 'ka-compare';
const K6 = cues(sc(KC), {hf: 'Hydrofluoric acid', ka: 'Ka of 6.8', four: 'minus four', forty: 'nearly forty times', at010: 'At 0.10 moles', eight: 'eight in a hundred', one: 'one in a hundred for acetic', bigger: 'the bigger the Ka', stronger: 'the stronger', notC: 'Ka is not the concentration', notPH: 'not the pH', much: 'how much acid you dissolved'});
export const SceneKaCompare: React.FC = () => {
	const xa = 180 + ((Math.log10(1.8e-5) + 12) / 12) * 1560, xh = 180 + ((Math.log10(6.8e-4) + 12) / 12) * 1560;
	return (
		<>
			<Heading text="Comparing two weak acids" at={4} size={62} />
			<Overlay>
				<LogRuler R={R5} at={-100} />
				<RMark R={R5} v={1.8e-5} at={-100} label={ACETIC_LABEL} up={86} size={30} anchor="end" />
				<RMark R={R5} v={6.8e-4} at={K6.ka + 10} label="HF: Ka = 6.8 × 10^{-4} (25 C)" up={160} size={30} color={ANION_INK} />
				<Fade at={K6.forty}>
					<DrawPath d={`M${xa},446 L${xa},460 L${xh},460 L${xh},446`} at={K6.forty} dur={14} color={AMBER_INK} width={4} />
					<Sx x={(xa + xh) / 2} y={500} text="nearly 40 times bigger" size={34} color={AMBER_INK} anchor="middle" hand at={K6.forty + 8} />
				</Fade>
				<Arrow x1={980} y1={560} x2={1720} y2={560} at={K6.bigger} color={TEAL} width={5} />
				<Sx x={1720} y={604} text="bigger Ka: a stronger weak acid" size={36} color={TEAL} anchor="end" hand at={K6.stronger} />
				{/* how many split, at the same concentration */}
				<Sx x={180} y={650} text="both at 0.10 mol/L" size={36} color={INK_SOFT} hand at={K6.at010} />
				<Grid100 x={180} y={680} cell={24} n={8} at={K6.eight - 10} every={4} />
				<Sx x={180} y={960} text="HF: about 8 in 100 split" size={32} color={ANION_INK} hand at={K6.eight + 6} />
				<Grid100 x={560} y={680} cell={24} n={1} at={K6.one - 6} />
				<Sx x={560} y={960} text="acetic: about 1 in 100" size={32} color={MOL} hand at={K6.one + 6} />
				{/* what Ka is not */}
				<MistakeChip x={1000} y={700} text="Ka = [H^{+}]?    Ka = pH?" size={34} at={K6.notC} />
				<Sx x={1000} y={830} text="Ka is a ratio: [H^{+}] and pH also" size={36} color={TEAL} hand at={K6.much - 10} />
				<Sx x={1000} y={876} text="depend on how much acid you dissolved" size={36} color={TEAL} hand at={K6.much} />
			</Overlay>
		</>
	);
};

// ---------- 6. Strong acids ----------
const SA = 'strong-acids';
const K7 = cues(sc(SA), {what: 'What about hydrochloric acid', comp: ['ionises completely', 1], none: 'no H C L molecules', bottom: 'bottom of the fraction', dont: "We don't use a Ka value", simply: 'simply say', comp2: ['ionises completely', 2], tool: 'Ka is the tool', weak: 'weak acids', both: 'both present'});
export const SceneStrongAcids: React.FC = () => {
	const f = useCurrentFrame();
	const grey = prog(f, K7.dont, 16);
	return (
		<>
			<Heading text="Strong acids: no Ka value" at={4} size={62} />
			<Overlay>
				<AcidLens cx={400} cy={580} r={230} n={10} seed={5} at={4} split={() => 1} title="hydrochloric acid: only ions" titleAt={K7.comp} />
				<Ring cx={400} cy={580} rx={90} ry={70} at={K7.none} out={K7.dont + 30} color={AMBER} seed={4} />
				<Sx x={400} y={890} text="no HCl molecules left" size={40} color={AMBER_INK} anchor="middle" hand at={K7.none + 10} />
				<g opacity={1 - 0.65 * grey}>
					<KaFrac cx={1080} cy={400} size={60} name="a" prefixAt={K7.what + 20} barAt={K7.what + 26}
						num={[{t: 'H^{+}', at: K7.what + 30, color: HPLUS_INK}, {t: 'Cl^{-}', at: K7.what + 36, color: ANION_INK}]}
						den={[{t: 'HCl', at: K7.what + 42, color: MOL}]} />
				</g>
				<Ring cx={1080} cy={455} rx={80} ry={44} at={K7.bottom} out={K7.dont + 20} color={AMBER} seed={6} />
				<Sx x={1180} y={480} text="about 0 ?" size={40} color={AMBER_INK} hand at={K7.bottom + 10} out={K7.dont + 20} />
				<DrawPath d="M860,330 L1300,500" at={K7.dont + 10} dur={12} color="#c4432f" width={6} />
				<Sx x={760} y={640} text="strong acid: ionises completely," size={42} color={INK} hand at={K7.dont + 10} />
				<Sx x={760} y={690} text="no Ka value used" size={42} color={INK} hand at={K7.comp2} />
				{/* Ka is for weak acids */}
				<Fade at={K7.tool}>
					<AcidLens cx={1560} cy={760} r={160} n={9} seed={6} at={K7.tool} split={dynamicSplit(K7.tool, 46, [2, 5, 7])} title="weak acid: molecules and ions, so Ka" titleAt={K7.weak} />
				</Fade>
				<Tick x={1700} y={600} at={K7.weak + 10} s={44} />
			</Overlay>
		</>
	);
};

// ---------- 7. Kb for a weak base ----------
const KB = 'kb';
export const NH3_EQ: EqItem[] = [{k: 'sp', t: 'NH_3(aq)', color: MOL}, {k: 'plus'}, {k: 'sp', t: 'H_2O(l)', color: WATER_INK}, {k: 'arrow'}, {k: 'sp', t: 'NH_4^{+}(aq)', color: ANION_INK}, {k: 'plus'}, {k: 'sp', t: 'OH^{-}(aq)', color: OH_INK}];
const K8 = cues(sc(KB), {bases: 'Bases work the same way', amm: ['Ammonia', 1], house: 'household cleaners', reacts: 'reacts with water', takes: 'takes a hydrogen ion', from: 'from a water molecule', ammonium: 'making an ammonium ion', hydroxide: 'and a hydroxide ion', oh: 'O H minus', join: 'also join back up', eqToo: 'equilibrium too', reactant: 'water is a reactant', solvent: 'still the solvent', stays: 'it stays out', kb: 'The constant is Kb', name: 'base dissociation constant', top: 'ammonium times hydroxide', over: 'over ammonia', val: 'Kb is 1.8', mol: 'stays as molecules', weak: 'weak base'});
const S8 = {x: 620, y: 270, s: 44};
const R8: Ruler = {x0: 1120, x1: 1800, y: 790, lo: -12, hi: 0};
export const SceneKb: React.FC = () => {
	const c = (i: number) => spCentre(NH3_EQ, i, S8.s, S8.x, S8.y);
	const cyc = dynamicSplit(K8.eqToo + 20, 60, [5, 2, 6]);
	const take = (f: number, i: number) => (i === 0 ? splitWin(f, K8.takes, K8.eqToo, 40) : i === 3 ? 1 - prog(f, K8.join + 10, 30) : cyc(f, i));
	const bottle = have(AMMONIA) ? AMMONIA : FLASK;
	return (
		<>
			<Heading text="Kb for a weak base" at={4} size={62} />
			<Overlay>
				<Fade at={K8.amm}>
					<PicH p={bottle} x={110} y={610} h={340} />
					{bottle === AMMONIA ? <Sx x={110 + (1000 - AMMONIA.box[0]) * (340 / AMMONIA.box[3])} y={610 + (1210 - AMMONIA.box[1]) * (340 / AMMONIA.box[3]) + 12} text="NH_3(aq)" size={30} color={MOL} anchor="middle" weight={800} at={-100} /> : null}
				</Fade>
				<Sx x={110 + picW(bottle, 340) / 2} y={1000} text="ammonia solution" size={34} color={INK} anchor="middle" hand at={K8.amm + 6} />
				<Sx x={110 + picW(bottle, 340) / 2} y={1040} text="(in some household cleaners)" size={28} color={INK_SOFT} anchor="middle" hand at={K8.house} />
				<AmmoniaLens cx={300} cy={370} r={170} n={8} take={take} at={K8.reacts} title="mostly molecules" titleAt={K8.mol} />
				<TwoWay x={490} y={370} w={100} at={K8.join} />
				<EqStrip items={withAt(NH3_EQ, [K8.amm, K8.reacts, K8.reacts + 8, K8.ammonium - 4, K8.ammonium + 6, K8.hydroxide, K8.hydroxide + 8])} x={S8.x} y={S8.y} size={S8.s} />
				<Sx x={S8.x} y={S8.y + 52} text="ammonia takes H^{+} from water: NH_4^{+} and OH^{-}" size={32} color={INK_SOFT} hand at={K8.oh} />
				{/* water stays out */}
				<Tray x={620} y={820} w={420} at={K8.reactant} items={[{t: 'H_2O(l)', at: K8.stays, from: c(2), color: WATER_INK}]} />
				<Sx x={620} y={1030} text="a reactant, but still the solvent" size={34} color={INK_SOFT} hand at={K8.solvent} />
				{/* Kb */}
				<KaFrac cx={1400} cy={470} size={56} name="b" prefixAt={K8.kb + 10} barAt={K8.top - 6}
					num={[{t: 'NH_4^{+}', at: K8.top + 4, color: ANION_INK, from: c(4)}, {t: 'OH^{-}', at: K8.top + 30, color: OH_INK, from: c(6)}]}
					den={[{t: 'NH_3', at: K8.over + 6, color: MOL, from: c(0)}]} />
				<Sx x={1120} y={650} text="base dissociation constant" size={44} color={TEAL} hand at={K8.name} />
				<LogRuler R={R8} at={K8.val - 10} every={4} bands={false} size={24} />
				<RMark R={R8} v={1.8e-5} at={K8.val + 10} label="ammonia: Kb = 1.8 × 10^{-5} (25 C)" up={64} size={28} />
				<Sx x={1120} y={940} text="weak base" size={56} color={INK} hand at={K8.weak} />
			</Overlay>
		</>
	);
};

// ---------- 8. The same rule for a solid ----------
const KP = 'ksp-preview';
export const AGCL_EQ: EqItem[] = [{k: 'sp', t: 'AgCl(s)', color: AG_INK}, {k: 'arrow'}, {k: 'sp', t: 'Ag^{+}(aq)', color: AG_INK}, {k: 'plus'}, {k: 'sp', t: 'Cl^{-}(aq)', color: CL_INK}];
const K9 = cues(sc(KP), {one: 'One more', pattern: 'see the pattern', solid: 'A solid that barely', silver: 'like silver chloride', balance: 'sits in balance', makes: 'Silver chloride solid makes', ions: 'silver ions and chloride', stays: 'The solid stays out', pure: 'pure solid', just: 'just silver ions', times: 'times chloride ions', ksp: 'called Ksp', later: 'later videos'});
const S9 = {x: 1000, y: 300, s: 50};
export const SceneKsp: React.FC = () => {
	const f = useCurrentFrame();
	const c = (i: number) => spCentre(AGCL_EQ, i, S9.s, S9.x, S9.y);
	const w = picW(SATURATED, 500);
	const terms: Term[] = [{t: 'Ag^{+}', at: K9.just + 10, color: AG_INK, from: c(2)}, {t: 'Cl^{-}', at: K9.times + 6, color: CL_INK, from: c(4)}];
	return (
		<>
			<Heading text="The same rule for a solid" at={4} size={62} />
			<Overlay>
				<Fade at={K9.solid}><PicH p={SATURATED} x={96} y={420} h={500} /></Fade>
				<Sx x={96 + w / 2} y={980} text="silver chloride: barely dissolves" size={34} color={INK} anchor="middle" hand at={K9.silver} />
				<path d={`M${96 + w * 0.5},${420 + 500 * 0.86} L${750},${700}`} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 6" opacity={f > K9.balance ? 1 : 0} />
				<CrystalLens cx={750} cy={520} r={190} at={K9.balance} cycleFrom={K9.balance} title="ions leave and rejoin the solid" />
				<EqStrip items={withAt(AGCL_EQ, [K9.makes, K9.makes + 20, K9.ions, K9.ions + 12, K9.ions + 22])} x={S9.x} y={S9.y} size={S9.s} />
				<Tray x={1000} y={760} w={380} at={K9.stays - 10} items={[{t: 'AgCl(s)', at: K9.stays + 4, from: c(0), color: AG_INK}]} />
				<Sx x={1420} y={850} text="a pure solid" size={40} color={INK_SOFT} hand at={K9.pure} />
				<KName x={1000} y={560} name="sp" size={60} at={K9.just} />
				<Sx x={1100} y={560} text="=" size={60} at={K9.just} />
				<Line x={1150} y={560} size={60} items={terms} />
				<Sx x={1000} y={640} text="nothing on the bottom: the solid is left out" size={32} color={INK_SOFT} hand at={K9.times + 30} />
				<Sx x={1000} y={690} text="(about 1.8 × 10^{-10} at 25 C)" size={30} color={INK_SOFT} at={K9.ksp + 10} />
				<Chip x={1420} y={930} w={400} text="Ksp: later videos" size={38} color={TEAL} at={K9.later} />
			</Overlay>
		</>
	);
};
void Tick;
