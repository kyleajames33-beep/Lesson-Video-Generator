// M6 C02 scenes 6 to 10: the salt rule and the reaction patterns (hydroxide, ammonia, carbonate, reactive metal).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {AMMONIA, ANTACID, BEAKER, FERT, MARBLE, MG_ACID, SODA_CLIP} from './assets';
import {
	AChip, AN, AN_INK, BASE, BASE_INK, Bubbles, CAT, CAT_INK, CO2C, CO2_INK, DrawPath, ELEC, EqLine, FTile, Fade, INK, INK_SOFT, Ion, IonTile, LensFrame, Mol, Note, Overlay, PROTON_INK,
	PairAt, PatternCard, PlateAt, Proton, ProtonHop, Ring, RoleRing, SaltBuilder, Sx, TEAL, eSpan, eq, fitSize, giveAt, hopState, lerp, picW, pulseAt, slotAt, smooth, tileW, vis,
} from './parts';
import type {EItem} from './parts';

const LENS_BG = '#eef6fb';
const EQ_Y = 920, EQ_X = 96;
/** Equation tokens: digits-only tokens are coefficients (teal, pulse on `pulse`). */
const coefEq = (parts: string[], ats: number[], pulse?: number): EItem[] => eq(parts.map(p => (/^\d$/.test(p) ? {t: p, color: TEAL} : p)), ats, undefined).map((it, i) => ({...it, at: ats[i] ?? ats[ats.length - 1]}));
const Coefs: React.FC<{items: EItem[]; size: number; x: number; y: number; at: number}> = ({items, size, x, y, at}) => (
	<>{items.map((it, i) => ('t' in it && /^\d$/.test(it.t) ? <Ring key={i} cx={eSpan(items, i, size, x).cx} cy={y - size * 0.32} rx={size * 0.42} ry={size * 0.5} at={at + i} color={TEAL} seed={i + 3} width={4} /> : null))}</>
);

// ---------- 6. The salt rule ----------
const H6 = 'salt-rule';
const K6 = cues(sc(H6), {those: 'Those reactions', salt: 'makes a salt', pos: 'a positive ion from', neg: 'the negative ion left', cl: 'Hydrochloric acid makes chlorides', so4: 'Sulfuric acid makes sulfates', no3: 'nitric acid makes nitrates', po4: 'phosphoric acid makes phosphates', charges: 'from the charges', balance: 'then balance'});
export const SceneSalt: React.FC = () => {
	const f = useCurrentFrame();
	const rows: [string, string, string, number, number][] = [['HCl', 'Cl^{-}', 'chloride', 1, K6.cl], ['H_2SO_4', 'SO_4^{2-}', 'sulfate', 2, K6.so4], ['HNO_3', 'NO_3^{-}', 'nitrate', 1, K6.no3], ['H_3PO_4', 'PO_4^{3-}', 'phosphate', 3, K6.po4]];
	const dim = prog(f, K6.charges - 10, 16);
	const pulseC = pulseAt(f, K6.pos, 0.05, 30), pulseA = pulseAt(f, K6.neg, 0.05, 30);
	return (
		<>
			<Heading text="Every acid reaction here makes a salt" at={4} size={56} />
			<Overlay>
				<Note x={96} y={240} text="salt: an ionic compound of a positive ion from the other reactant" size={40} at={K6.salt} />
				<Note x={96} y={290} text="and the negative ion left from the acid" size={40} at={K6.neg} />
				<g transform={`translate(${96 + 150},${560}) scale(${pulseC}) translate(${-(96 + 150)},${-560})`}>
					<Note x={96} y={720} text="(from the base or metal)" size={30} color={CAT_INK} at={K6.pos} />
				</g>
				<g transform={`translate(${436 + 150},${560}) scale(${pulseA}) translate(${-(436 + 150)},${-560})`}>
					<Note x={436} y={720} text="(from the acid)" size={30} color={AN_INK} at={K6.neg} />
				</g>
				<SaltBuilder x={96} y={420} at={K6.pos - 6} spec={{cat: 'Ca^{2+}', an: 'Cl^{-}', nCat: 1, nAn: 2, formula: 'CaCl_2', tally: '(+2) + 2(−1) = 0', name: 'calcium chloride'}} catAt={K6.charges} anAt={K6.charges + 20} resAt={K6.charges + 46} tallyAt={K6.balance} />
				<Note x={96} y={810} text="Ca^{2+} needs two Cl^{-}: charges cancel" size={36} color={TEAL} at={K6.charges + 34} />
				<Note x={96} y={880} text="formula from the charges first, then balance" size={44} color={INK} at={K6.balance} />
				<g opacity={1 - 0.6 * dim}>
					<Note x={1290} y={420} text="the acid leaves its negative ion" size={32} color={INK_SOFT} at={K6.cl} />
					{rows.map(([acid, ion, name, n, at], i) => {
						const y = 510 + i * 110;
						return (
							<g key={acid}>
								<FTile x={1290} y={y} formula={acid} size={40} at={at} />
								{Array.from({length: n}, (_, k) => {
									const t = smooth(prog(f, at + 10 + k * 4, 22));
									return t > 0.01 && t < 0.99 ? <Proton key={k} x={1300 + k * 26 + t * -60} y={y - 40 - t * 50} s={0.7} o={1 - t} /> : null;
								})}
								<DrawPath d={`M${1300 + tileW(acid, 40)},${y - 14} L${1300 + tileW(acid, 40) + 50},${y - 14}`} at={at + 10} dur={10} color={INK_SOFT} width={4} />
								<IonTile x={1370 + tileW(acid, 40)} y={y} t={ion} kind="-" size={36} at={at + 16} anchor="start" />
								<Note x={1370 + tileW(acid, 40)} y={y + 50} text={name + 's'} size={30} color={AN_INK} at={at + 20} />
							</g>
						);
					})}
				</g>
				{void K6.those}
			</Overlay>
		</>
	);
};

// ---------- 7. Pattern 1: acid + hydroxide ----------
const H7 = 'acid-hydroxide';
const K7 = cues(sc(H7), {p1: 'Pattern one', gives: 'gives a salt and water', why: 'Why water', each: 'Each hydroxide ion accepts', plus: 'a hydroxide ion plus a proton', antacid: 'Antacid tablets', stomach: 'stomach acid', mgoh: 'Magnesium hydroxide has', twoplus: 'two plus ion', twooh: 'and two hydroxides', needs: 'Each hydroxide needs', twohcl: 'takes two hydrochloric acids', products: 'The products', mgcl2: 'magnesium chloride', twow: 'two waters'});
export const SceneHydroxide: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 640, cy: 470, r: 200};
	const pairs = [{h: [530, 400], o: [740, 400], at: K7.each}, {h: [530, 560], o: [740, 560], at: K7.twohcl}];
	const items = coefEq(['Mg(OH)_2(s)', '+', '2', 'HCl(aq)', '->', 'MgCl_2(aq)', '+', '2', 'H_2O(l)'], [K7.twohcl - 30, K7.twohcl - 26, K7.twohcl, K7.twohcl, K7.products, K7.mgcl2, K7.twow - 4, K7.twow, K7.twow]);
	const S = fitSize(items, 1100, 54);
	return (
		<>
			<Heading text="Acid + hydroxide" at={4} size={56} />
			<Overlay>
				<PatternCard x={96} y={170} n={1} partner="hydroxide" products={['salt', 'water']} at={K7.p1} />
				<PlateAt p={ANTACID} x={96} y={300} h={180} at={K7.antacid} />
				<Note x={96} y={530} text="antacid: Mg(OH)_2" size={36} color={INK} at={K7.antacid + 6} />
				<Note x={96} y={576} text="stomach acid: HCl" size={36} color={INK_SOFT} at={K7.stomach} />
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K7.why - 6}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill={LENS_BG} />
					{pairs.map((p, i) => {
						const st = hopState(f, p.at);
						const o = i === 0 ? 1 : prog(f, K7.twooh, 12);
						return (
							<g key={i} opacity={o}>
								<Mol x={p.h[0]} y={p.h[1]} m="HCl" s={1.2} give={st.give} />
								<Mol x={p.o[0]} y={p.o[1]} m="H2O" s={1.2} give={1} take={st.take} />
								<ProtonHop a={giveAt('HCl', p.h[0], p.h[1], 1.2)} b={slotAt('H2O', p.o[0], p.o[1], 1.2)} at={p.at} s={0.8} bow={-50} />
							</g>
						);
					})}
				</LensFrame>
				<Note x={L.cx} y={L.cy + L.r + 46} text="OH^{-} + H^{+} = H_2O" size={40} color={TEAL} anchor="middle" at={K7.plus} />
				<SaltBuilder x={990} y={320} s={0.9} slotW={240} at={K7.mgoh - 6} spec={{cat: 'Mg^{2+}', an: 'Cl^{-}', nCat: 1, nAn: 2, formula: 'MgCl_2', tally: '(+2) + 2(−1) = 0'}} catAt={K7.twoplus} anAt={K7.needs} resAt={K7.mgcl2} />
				<Fade at={K7.twooh}>
					<Sx x={990} y={640} text="Mg(OH)_2: one Mg^{2+}, two OH^{-}" size={34} color={INK} weight={600} at={-1000} />
				</Fade>
				<EqLine items={items} x={EQ_X} y={840} size={S} />
				<Coefs items={items} size={S} x={EQ_X} y={840} at={K7.twow + 10} />
				<Note x={EQ_X} y={910} text="H check: 2 + 2 = 4 = 2 × 2" size={32} color={TEAL} at={K7.twow + 16} />
				<PlateAt p={BEAKER} x={1290} y={900} h={130} at={K7.twow + 26} />
				<Note x={1430} y={960} text="hook: NaOH(aq) + HCl(aq)" size={28} color={INK_SOFT} hand={false} at={K7.twow + 30} />
				<Note x={1430} y={1000} text="→ NaCl(aq) + H_2O(l)" size={28} color={INK_SOFT} hand={false} at={K7.twow + 34} />
				{void K7.gives}{void picW}{void BASE}{void CAT}{void AN}
			</Overlay>
		</>
	);
};

// ---------- 8. Pattern 1 with ammonia: a salt, no water ----------
const H8 = 'acid-ammonia';
const K8 = cues(sc(H8), {p1: 'pattern one with', noOH: 'has no hydroxide', fert: 'Fertiliser factories', amso4: 'make ammonium sulfate', each: 'Each ammonia molecule', nh4: 'becomes an ammonium ion', two: 'can give two protons', twoam: 'needs two ammonias', salt2: 'the salt is two', catch: "here's the catch", nowater: 'no water in the products', nothing: 'nothing for the proton'});
export const SceneAmmonia: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 640, cy: 470, r: 200};
	const sx = L.cx, sy = L.cy + 50;
	const n1 = [L.cx - 115, L.cy - 50], n2 = [L.cx + 115, L.cy - 50];
	const h1: [number, number] = [sx - 54, sy - 34], h2: [number, number] = [sx + 54, sy - 34];
	const hop1 = K8.nh4 - 20, hop2 = K8.twoam;
	const st1 = hopState(f, hop1), st2 = hopState(f, hop2);
	const items: EItem[] = [...coefEq(['2', 'NH_3(g)', '+', 'H_2SO_4(aq)', '->', '(NH_4)_2SO_4(aq)'], [K8.twoam, K8.twoam, K8.twoam + 4, K8.twoam + 8, K8.salt2, K8.salt2 + 4]), {t: ' + 2H_2O(l)', at: K8.nowater, strike: K8.nowater + 10, color: INK_SOFT}];
	const S = 54;
	const tail = eSpan(items, 6, S, EQ_X);
	return (
		<>
			<Heading text="Acid + ammonia: a base with no hydroxide" at={4} size={56} />
			<Overlay>
				<PatternCard x={96} y={170} n={1} partner="ammonia" products={['salt']} at={K8.p1} />
				<PlateAt p={AMMONIA} x={110} y={290} h={220} at={K8.fert - 6} />
				<Note x={110} y={550} text="ammonia, NH_3" size={34} at={K8.fert} />
				<PlateAt p={FERT} x={96} y={590} h={120} at={K8.amso4} />
				<Note x={96} y={750} text="ammonium sulfate fertiliser" size={30} color={INK_SOFT} at={K8.amso4 + 6} />
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K8.fert}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill={LENS_BG} />
					<Ion x={sx} y={sy} kind="-" r={46} label="SO_4^{2-}" labelSize={24} />
					{f < hop1 ? <Proton x={h1[0]} y={h1[1]} s={0.85} /> : null}
					{f < hop2 ? <Proton x={h2[0]} y={h2[1]} s={0.85} /> : null}
					<Mol x={n1[0]} y={n1[1]} m="NH3" s={1.05} take={st1.take} />
					<Mol x={n2[0]} y={n2[1]} m="NH3" s={1.05} take={st2.take} o={prog(f, K8.two, 12)} />
					<ProtonHop a={h1} b={slotAt('NH3', n1[0], n1[1], 1.05)} at={hop1} s={0.85} bow={-50} />
					<ProtonHop a={h2} b={slotAt('NH3', n2[0], n2[1], 1.05)} at={hop2} s={0.85} bow={-50} />
				</LensFrame>
				<Note x={L.cx} y={L.cy + L.r + 46} text="each NH_3 + H^{+} → NH_4^{+}" size={38} color={BASE_INK} anchor="middle" at={K8.nh4} />
				<SaltBuilder x={990} y={320} s={0.9} slotW={240} at={K8.amso4 - 6} spec={{cat: 'NH_4^{+}', an: 'SO_4^{2-}', nCat: 2, nAn: 1, formula: '(NH_4)_2SO_4', tally: '2(+1) + (−2) = 0'}} catAt={K8.salt2} anAt={K8.salt2 + 14} resAt={K8.salt2 + 30} />
				<EqLine items={items} x={EQ_X} y={840} size={S} />
				<Note x={tail.cx} y={910} text="no OH^{-}, so no water" size={36} color="#c4432f" anchor="middle" at={K8.nowater + 20} />
				<Note x={EQ_X} y={990} text="with no hydroxide, the proton has nothing to turn into water" size={34} color={INK_SOFT} at={K8.nothing} />
				{void K8.noOH}{void K8.each}{void K8.catch}{void RoleRing}{void lerp}
			</Overlay>
		</>
	);
};

// ---------- 9. Pattern 2: acid + carbonate ----------
const H9 = 'acid-carbonate';
const K9 = cues(sc(H9), {p2: 'Pattern two', co2: 'gives a salt, water and carbon dioxide', accepts: 'accepts two protons', carbonic: 'becomes carbonic acid', unstable: 'which is unstable', breaks: 'breaks straight into', fizz: "That's the fizz", marble: 'Marble is calcium carbonate', twocl: 'needs two chlorides', cacl2: 'give calcium chloride', hco3: 'Hydrogen carbonates, like', same: 'follow the same pattern'});
export const SceneCarbonate: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 640, cy: 470, r: 200};
	const cx = L.cx - 20, cy = L.cy + 30;
	const hop1 = K9.accepts, hop2 = K9.accepts + 34;
	const split = smooth(prog(f, K9.breaks, 30));
	const rise = smooth(prog(f, K9.breaks + 20, 90));
	const items = coefEq(['CaCO_3(s)', '+', '2', 'HCl(aq)', '->', 'CaCl_2(aq)', '+', 'H_2O(l)', '+', 'CO_2(g)'], [K9.marble, K9.twocl, K9.twocl, K9.twocl, K9.cacl2 - 6, K9.cacl2, K9.cacl2 + 6, K9.cacl2 + 10, K9.cacl2 + 14, K9.cacl2 + 18]);
	const S = fitSize(items, 1240, 52);
	const items2 = eq(['NaHCO_3(s)', '+', 'HCl(aq)', '->', 'NaCl(aq)', '+', 'H_2O(l)', '+', 'CO_2(g)'], K9.same);
	return (
		<>
			<Heading text="Acid + carbonate" at={4} size={56} />
			<Overlay>
				<PatternCard x={96} y={170} n={2} partner="carbonate" products={['salt', 'water', 'CO₂']} at={K9.p2} />
				<PlateAt p={MARBLE} x={96} y={300} h={260} at={K9.marble - 4} />
				<Note x={96} y={610} text="marble: CaCO_3" size={36} at={K9.marble} />
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K9.co2}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill={LENS_BG} />
					<g opacity={1 - split}>
						<Mol x={cx} y={cy} m={f >= hop1 + 26 ? 'HCO3' : 'CO3'} s={1.0} take={f >= hop1 + 26 ? (f >= hop2 + 26 ? 1 : 0) : 0} />
					</g>
					<ProtonHop a={[L.cx - L.r + 30, L.cy - 120]} b={slotAt('CO3', cx, cy, 1.0)} at={hop1} s={0.85} bow={-30} />
					<ProtonHop a={[L.cx - L.r + 30, L.cy + 120]} b={slotAt('HCO3', cx, cy, 1.0)} at={hop2} s={0.85} bow={40} />
					{split > 0.01 ? <>
						<Mol x={cx - 70} y={cy + 60} m="H2O" s={0.95} o={split} />
						<g transform={`translate(0,${-rise * 110})`} opacity={split}>
							<circle cx={cx + 90} cy={cy - 10} r={66} fill={CO2C} opacity={0.35} stroke={CO2_INK} strokeWidth={3} />
							<Mol x={cx + 90} y={cy - 10} m="CO2" s={0.75} />
						</g>
					</> : null}
				</LensFrame>
				<Fade at={K9.carbonic} out={K9.breaks}><circle cx={cx} cy={cy} r={95} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" /></Fade>
				<Note x={L.cx} y={L.cy + L.r + 44} text="H_2CO_3: unstable" size={36} color={INK_SOFT} anchor="middle" at={K9.unstable} out={K9.breaks + 10} />
				<Note x={L.cx} y={L.cy + L.r + 44} text="→ H_2O + CO_2 (the fizz)" size={36} color={CO2_INK} anchor="middle" at={K9.fizz} />
				<SaltBuilder x={990} y={320} s={0.9} slotW={240} at={K9.marble} spec={{cat: 'Ca^{2+}', an: 'Cl^{-}', nCat: 1, nAn: 2, formula: 'CaCl_2', tally: '(+2) + 2(−1) = 0'}} catAt={K9.marble + 10} anAt={K9.twocl} resAt={K9.cacl2} />
				<EqLine items={items} x={EQ_X} y={840} size={S} />
				<Coefs items={items} size={S} x={EQ_X} y={840} at={K9.cacl2 + 20} />
				<PairAt a={SODA_CLIP.before} b={SODA_CLIP.fizz} x={1500} y={560} h={200} at={K9.hco3} swap={K9.same} dur={30} />
				<Note x={1480} y={800} text="baking soda + vinegar:" size={30} color={INK_SOFT} at={K9.hco3 + 6} />
				<Note x={1480} y={836} text="same pattern" size={30} color={INK_SOFT} at={K9.hco3 + 10} />
				<EqLine items={items2} x={EQ_X} y={950} size={40} />
				{void BEAKER}{void picW}{void ELEC}{void vis}{void AChip}{void IonTile}{void CAT_INK}{void PROTON_INK}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 10. Pattern 3: acid + reactive metal ----------
const H10 = 'acid-metal';
const K10 = cues(sc(H10), {p3: 'Pattern three', h2: 'a salt and hydrogen gas', isnt: "This one isn't", electrons: 'give electrons to hydrogen ions', pair: 'pair up as hydrogen', ions: 'the metal ends up', al: 'Aluminium with hydrochloric', three: 'aluminium is three plus', alcl3: 'the salt is A l C l three', balancing: 'Balancing the hydrogen', six: 'six hydrochloric acids', making: 'making two aluminium', threeh2: 'three hydrogen molecules'});
export const SceneMetal: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 640, cy: 470, r: 200};
	const surfY = L.cy + 60;
	const ma = [L.cx - 150, L.cx - 75, L.cx, L.cx + 75, L.cx + 150];
	const e = smooth(prog(f, K10.electrons, 30));
	const pair = smooth(prog(f, K10.pair, 24));
	const up = smooth(prog(f, K10.pair + 24, 80));
	const ion = smooth(prog(f, K10.ions, 50));
	const hp: [number, number][] = [[L.cx - 90, L.cy - 60], [L.cx + 90, L.cy - 60]];
	const meet: [number, number] = [L.cx, L.cy - 70];
	const items = coefEq(['2', 'Al(s)', '+', '6', 'HCl(aq)', '->', '2', 'AlCl_3(aq)', '+', '3', 'H_2(g)'], [K10.making, K10.al, K10.six, K10.six, K10.six, K10.making - 4, K10.making, K10.making, K10.threeh2 - 4, K10.threeh2, K10.threeh2]);
	const S = fitSize(items, 1240, 54);
	return (
		<>
			<Heading text="Acid + reactive metal" at={4} size={56} />
			<Overlay>
				<PatternCard x={96} y={170} n={3} partner="reactive metal" products={['salt', 'H₂']} at={K10.p3} />
				<PlateAt p={MG_ACID} x={96} y={300} h={260} at={K10.p3 + 10} />
				<Note x={96} y={610} text="metal fizzes: H_2 gas" size={36} at={K10.h2} />
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K10.h2}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill={LENS_BG} />
					<rect x={L.cx - L.r} y={surfY + 30} width={2 * L.r} height={L.r} fill="#d9d6cf" />
					{ma.map((x, i) => (i === 2 ? null : <circle key={i} cx={x} cy={surfY + 40} r={32} fill="#b9bcc0" stroke={INK} strokeWidth={2.5} />))}
					{/* the metal atom that gives electrons, then leaves as a positive ion */}
					<g transform={`translate(${ion * 120},${-ion * 150})`}>
						<circle cx={ma[2]} cy={surfY + 40} r={32 - ion * 6} fill={ion > 0.3 ? CAT : '#b9bcc0'} stroke={INK} strokeWidth={2.5} />
						{ion > 0.3 ? <Sx x={ma[2]} y={surfY + 50} text="3+" size={24} color={INK} anchor="middle" weight={800} at={-1000} /> : null}
					</g>
					{/* electrons */}
					{f >= K10.electrons && f < K10.pair + 10 ? hp.map((p, i) => <circle key={i} cx={lerp(ma[2], p[0], e)} cy={lerp(surfY + 40, p[1] + 26, e)} r={9} fill={ELEC} stroke={INK} strokeWidth={2} />) : null}
					{/* hydrogen ions pair into H2 */}
					{pair < 0.99 ? hp.map((p, i) => <Proton key={i} x={lerp(p[0], meet[0] + (i ? 18 : -18), pair)} y={lerp(p[1], meet[1], pair)} s={0.95} o={prog(f, K10.h2, 10)} />) : null}
					{pair >= 0.99 ? (
						<g transform={`translate(0,${-up * 90})`}>
							<circle cx={meet[0]} cy={meet[1]} r={46} fill="#ffffff" opacity={0.6} stroke="#9aa7b0" strokeWidth={3} />
							<line x1={meet[0] - 16} y1={meet[1]} x2={meet[0] + 16} y2={meet[1]} stroke={INK} strokeWidth={5} />
							<circle cx={meet[0] - 16} cy={meet[1]} r={14} fill="#ffffff" stroke={INK} strokeWidth={2.4} />
							<circle cx={meet[0] + 16} cy={meet[1]} r={14} fill="#ffffff" stroke={INK} strokeWidth={2.4} />
						</g>
					) : null}
				</LensFrame>
				<Note x={L.cx} y={L.cy + L.r + 44} text="electron transfer (Year 11), not proton transfer" size={32} color={INK_SOFT} anchor="middle" at={K10.isnt} />
				<Note x={L.cx + L.r + 30} y={L.cy - 60} text="2H^{+} + 2e^{-} → H_2" size={34} color={PROTON_INK} at={K10.pair + 10} />
				<SaltBuilder x={990} y={320} s={0.9} slotW={240} at={K10.al - 6} spec={{cat: 'Al^{3+}', an: 'Cl^{-}', nCat: 1, nAn: 3, formula: 'AlCl_3', tally: '(+3) + 3(−1) = 0'}} catAt={K10.three} anAt={K10.three + 16} resAt={K10.alcl3} />
				<EqLine items={items} x={EQ_X} y={840} size={S} />
				<Coefs items={items} size={S} x={EQ_X} y={840} at={K10.threeh2 + 14} />
				<Note x={EQ_X} y={910} text="H check: 6 H = 3 × 2" size={34} color={TEAL} at={K10.threeh2 + 20} />
				{void K10.balancing}{void BASE_INK}{void AN_INK}
			</Overlay>
		</>
	);
};
