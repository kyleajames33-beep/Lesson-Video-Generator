// M7 C06 scenes 7 to 11: fermentation balanced (the atom tally; yeast on the arrow), the school setup (condition tags
// on the fermentation plate; it cross-fades to the bubbling plate on "limewater"), it stops at about 15% so distil (the
// gauge; droplets into the collecting flask), judging the three routes (three cards, the spoken line bright) and the
// memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {Tag} from '../chem-m7-c01/molecules';
import {CT, dimAt, vis} from '../chem-m7-c04a/parts';
import {DISTIL, FERM, sc} from './common';
import {Arrow2, Bubbles, Drips, EqRow, Fill, GREY, INK, INK_SOFT, Leader, NAVY, Plate, RCard, RED, Tally, eqLay, ptOn} from './parts';
import type {ET} from './parts';

export const fermL = (at: number): ET[] => [{t: 'C_6H_12O_6', at}];
export const fermR = (a: number, b: number, c: number): ET[] => [{t: '2C_2H_5OH', at: a, ring: 'OH'}, {t: '+', at: b}, {t: '2CO_2', at: c, box: c + 8}];

// ---------- 7. Fermentation, balanced ----------
const K7 = cues(sc('fermentation-equation'), {r3: 'Route three', ferm: 'ferments', one: 'one glucose', two: 'two ethanol', co2: 'two carbon dioxide.', check: 'Check it:', c6: 'six carbons,', h12: 'twelve hydrogens', o6: 'six oxygens', enz: 'Enzymes inside', cat: 'catalyst,', goes: 'goes on', arrow: 'arrow,'});
export const SceneFermEq: React.FC = () => {
	const S = {cx: 960, y: 400, size: 60, len: 260};
	const L = eqLay(fermL(0), fermR(0, 0, 0), S.size, S.len, S.cx);
	const rx = (L.rx[0] + L.rx[2] + L.wr[2]) / 2;
	return (
		<Overlay>
			<TaskLine text="Route 3: fermentation" at={K7.r3} size={54} y={130} />
			<EqRow left={fermL(K7.ferm)} right={fermR(K7.two, K7.co2 - 6, K7.co2)} cx={S.cx} y={S.y} size={S.size} len={S.len} arrow={{at: K7.one, above: [{t: 'yeast', at: K7.goes, fill: '#fbeec4'}]}} />
			<Sx x={L.lc[0]} y={500} text="glucose" size={28} color={GREY} anchor="middle" weight={600} at={K7.ferm + 10} />
			<Sx x={L.rc[0]} y={500} text="ethanol" size={28} color={GREY} anchor="middle" weight={600} at={K7.two + 10} />
			<Sx x={L.rc[2]} y={500} text="carbon dioxide" size={28} color={GREY} anchor="middle" weight={600} at={K7.co2 + 10} />
			<Sx x={L.lc[0]} y={590} text="atoms on each side" size={30} color={INK_SOFT} anchor="middle" hand at={K7.check} />
			<Tally x={L.x0 - 110} lx={L.lc[0]} rx={rx} y={680} lh={82} size={46} tickDx={180} rows={[
				{el: 'C', at: K7.c6, l: [{t: '6', at: K7.c6}], r: [{t: '4 + 2', at: K7.c6 + 10}], tick: K7.c6 + 22},
				{el: 'H', at: K7.h12, l: [{t: '12', at: K7.h12}], r: [{t: '12', at: K7.h12 + 10}], tick: K7.h12 + 22},
				{el: 'O', at: K7.o6, l: [{t: '6', at: K7.o6}], r: [{t: '2 + 4', at: K7.o6 + 10}], tick: K7.o6 + 22},
			]} />
			<Tag x={S.cx} y={230} text="enzymes in yeast: the catalyst" at={K7.cat} size={30} color="#8a5a0c" fill="#fbeec4" anchor="middle" />
			{void K7.enz}{void K7.arrow}
		</Overlay>
	);
};

// ---------- 8. The school setup ----------
const K8 = cues(sc('fermentation-setup'), {here: "Here's a school", glu: 'Glucose solution', bath: 'water bath', t35: 'thirty five', warm: 'warm enough', dmg: 'damages them.', bung: 'A bung', out: 'out,', oxy: 'with oxygen,', resp: 'respire aerobically', less: 'less ethanol forms.', tube: 'The tube also', esc: 'escape,', press: "pressure can't", lime: 'limewater,', milky: 'turns milky', show: 'showing carbon'});
export const FS = {cx: 900, top: 270, h: 560};
const fp = (u: number, v: number) => ptOn(FERM.start, FS.cx, FS.top, FS.h, u, v);
export const FermStrip: React.FC<{o?: number; y?: number; cx?: number; size?: number}> = ({o = 0.55, y = 200, cx = 1180, size = 30}) => (
	<EqRow left={fermL(-100)} right={fermR(-100, -100, -100)} cx={cx} y={y} size={size} len={150} arrow={{at: -100, above: [{t: 'yeast', at: -100, fill: '#fbeec4'}]}} o={o} />
);
export const SceneFermSetup: React.FC = () => {
	const f = useCurrentFrame();
	const bath = fp(300, 1250), bung = fp(675, 615), tube = fp(1150, 425), lime = fp(1537, 1240), liq = fp(675, 1250);
	const tE = fp(1562, 1300);
	const k = FS.h / 1185;
	return (
		<Overlay>
			<TaskLine text="Route 3: fermentation" at={-100} size={54} y={130} />
			<FermStrip />
			<Plate p={FERM.start} to={FERM.bub} swap={K8.lime} cx={FS.cx} top={FS.top} h={FS.h} at={K8.here} />
			<Bubbles x={tE[0] - 14} y={tE[1] - 70} w={24} h={60} at={K8.lime + 10} every={7} />
			<Bubbles x={fp(560, 0)[0]} y={fp(0, 1180)[1]} w={(800 - 560) * k} h={(1430 - 1180) * k} at={K8.lime + 10} every={11} />
			<Leader a={[440, 588]} b={liq} at={K8.glu} o={dimAt(f, K8.bath, 0.3)} />
			<Tag x={96} y={566} text="glucose solution + yeast" at={K8.glu} size={26} o={dimAt(f, K8.bath, 0.3)} />
			<g opacity={dimAt(f, K8.bung, 0.35)}>
				<Leader a={[300, 878]} b={bath} at={K8.bath} />
				<Tag x={96} y={880} text="water bath, about 35 °C: enzymes work fast" at={K8.bath} size={26} color={NAVY} fill="#e7edf8" />
				<Tag x={96} y={940} text="too hot damages them" at={K8.dmg} size={24} />
			</g>
			<g opacity={dimAt(f, K8.tube, 0.35)}>
				<Leader a={[560, 318]} b={bung} at={K8.out} />
				<Tag x={96} y={296} text="air kept out (anaerobic: no air)" at={K8.out} size={26} color={NAVY} fill="#e7edf8" />
				<Tag x={96} y={356} text="with O_2: some sugar → CO_2 + H_2O, less ethanol" at={K8.resp} size={22} />
			</g>
			<g opacity={dimAt(f, K8.lime, 0.35)}>
				<Leader a={[1330, 318]} b={tube} at={K8.esc} />
				<Tag x={1330} y={296} text="CO_2 escapes: no pressure build-up" at={K8.esc} size={26} color={NAVY} fill="#e7edf8" />
			</g>
			<Leader a={[1330, 778]} b={lime} at={K8.milky} />
			<Tag x={1330} y={756} text="CO_2 turns limewater milky" at={K8.milky} size={28} color={TEAL} fill="#dff2ef" />
			{void K8.t35}{void K8.warm}{void K8.oxy}{void K8.less}{void K8.press}{void K8.show}
		</Overlay>
	);
};

// ---------- 9. It stops at about 15%, so distil ----------
const K9 = cues(sc('distil-fermentation'), {after: 'After a few', slows: 'bubbling slows.', fifteen: 'fifteen', poison: 'poisons', toget: 'To get more', filter: 'filter out', distil: 'distil the mixture', b78: 'seventy eight', b100: 'one hundred,', richer: 'richer in ethanol.', ind: 'Industry uses'});
export const SceneDistil: React.FC = () => {
	const f = useCurrentFrame();
	const t = smooth(prog(f, 0, 34));
	const cx = FS.cx + (330 - FS.cx) * t, top = FS.top + (360 - FS.top) * t, h = FS.h + (300 - FS.h) * t;
	const q = (u: number, v: number) => ptOn(FERM.bub, cx, top, h, u, v);
	const k = h / 1185;
	const tE = q(1562, 1300);
	const D = {cx: 1300, top: 300, h: 420};
	const dp = (u: number, v: number) => ptOn(DISTIL, D.cx, D.top, D.h, u, v);
	const th = dp(545, 520), mouth = dp(1530, 1092), cl = dp(1550, 1350);
	return (
		<Overlay>
			<TaskLine text="Route 3: fermentation" at={-100} size={54} y={130} />
			<Plate p={FERM.bub} cx={cx} top={top} h={h} />
			<Bubbles x={tE[0] - 12 * (h / 560)} y={tE[1] - 60 * (h / 560)} w={22 * (h / 560)} h={52 * (h / 560)} at={-60} slow={K9.slows - 20} stop={K9.slows + 70} every={8} s={h / 560} />
			<Bubbles x={q(560, 0)[0]} y={q(0, 1180)[1]} w={(800 - 560) * k} h={(1430 - 1180) * k} at={-60} slow={K9.slows - 20} stop={K9.slows + 70} every={12} s={h / 560} />
			<Fill x={560} y={400} w={46} h={260} frac={0.15} at={K9.fifteen} />
			<Sx x={583} y={386} text="ethanol" size={22} color={GREY} anchor="middle" weight={600} at={K9.fifteen} />
			<Tag x={330} y={700} text="about 15% ethanol" at={K9.fifteen + 10} size={30} color="#8a5a0c" fill="#fbeec4" anchor="middle" />
			<Tag x={330} y={760} text="ethanol inhibits yeast" at={K9.poison} size={26} anchor="middle" />
			<Tag x={330} y={850} text="filter out the yeast first" at={K9.filter} out={K9.filter + 80} size={24} anchor="middle" />
			<Plate p={DISTIL} cx={D.cx} top={D.top} h={D.h} at={K9.distil} />
			<Sx x={D.cx} y={D.top + D.h + 56} text="distilling the fermented mixture" size={28} color={INK} anchor="middle" weight={700} at={K9.distil + 6} />
			<Leader a={[1190, 252]} b={th} at={K9.b78} />
			<Tag x={1190} y={222} text="ethanol 78 °C" at={K9.b78} size={26} color={RED} fill="#f9e1dc" />
			<Tag x={1420} y={222} text="water 100 °C" at={K9.b100} size={26} color="#2d6f9e" fill="#e3f0fa" />
			<Drips a={mouth} b={cl} at={K9.richer} until={900} every={14} />
			<Leader a={[1640, 560]} b={[mouth[0] + 14, mouth[1] + 40]} at={K9.richer + 6} />
			<Tag x={1640} y={540} text="richer in ethanol" at={K9.richer + 6} size={28} color={TEAL} fill="#dff2ef" />
			<Tag x={D.cx} y={860} text="industry: fractional distillation" at={K9.ind} size={24} anchor="middle" o={dimAt(f, K9.ind + 60, 0.5)} />
			{void K9.after}{void K9.toget}
		</Overlay>
	);
};

// ---------- 10. Judging the three routes ----------
const K10 = cues(sc('judge-routes'), {which: 'So which', comp: 'Compare them', hyd: 'Hydration is', needs: 'needs high', nonr: 'non-renewable', ferm: 'Fermentation runs', renew: 'renewable', slow: 'slow,', dilute: 'dilute', land: 'land and water.', subst: 'Substitution suits', first: 'first.', none: 'no single winner.', dep: 'It depends'});
export const SceneJudge: React.FC = () => {
	const f = useCurrentFrame();
	const W = 560, Y = 200, H = 450;
	const even = K10.dep;
	return (
		<Overlay>
			<TaskLine text="Which route is best?" at={K10.which} size={54} y={130} />
			<RCard x={96} y={Y} w={W} h={H} title="Hydration" at={K10.comp} lit={[K10.hyd, K10.ferm]} even={even} lines={[
				{t: 'fast, continuous', at: K10.hyd},
				{t: '300 °C, 60 to 70 atm', at: K10.needs},
				{t: 'ethene from crude oil or gas', at: K10.nonr - 10},
				{t: 'non-renewable', at: K10.nonr, under: K10.nonr + 10, color: RED},
			]} />
			<RCard x={680} y={Y} w={W} h={H} title="Fermentation" at={K10.comp + 8} lit={[K10.ferm, K10.subst]} even={even} lines={[
				{t: 'about 35 °C: warm, not hot', at: K10.ferm},
				{t: 'sugar crop: renewable', at: K10.renew, under: K10.renew + 10, color: TEAL},
				{t: 'slow, batch', at: K10.slow},
				{t: 'about 15%: distilling takes energy', at: K10.dilute},
				{t: 'crop needs land and water', at: K10.land - 16, until: K10.subst},
			]} />
			<RCard x={1264} y={Y} w={W} h={H} title="Substitution" at={K10.comp + 16} lit={[K10.subst, K10.none]} even={even} lines={[
				{t: 'heat under reflux', at: K10.subst},
				{t: 'makes a chosen alcohol', at: K10.subst + 24},
				{t: 'haloalkane made first', at: K10.first - 20, under: K10.first},
			]} />
			<Arrow2 a={[1544, 664]} b={[1544, 716]} at={K10.first} color={INK_SOFT} />
			<Tag x={1544} y={726} text="alkane + Br_2, UV light (C04b)" at={K10.first + 10} size={24} anchor="middle" o={dimAt(f, even, 0.6)} />
			<Tag x={1544} y={784} text="alkene + HBr (C04a)" at={K10.first + 18} size={24} anchor="middle" o={dimAt(f, even, 0.6)} />
			<Tag x={760} y={860} text="fermentation: always the greener choice?" at={K10.none - 6} out={K10.dep + 16} size={28} anchor="middle" o={0.65} />
			<Tag x={960} y={930} text="judge: feedstock, energy, rate, purity" at={K10.dep} size={36} color={NAVY} fill="#e7edf8" anchor="middle" />
		</Overlay>
	);
};

// ---------- 11. Memory aid ----------
const K11 = cues(sc('memory-aid'), {so: 'So, three', hyd: 'Hydration:', sub: 'Substitution:', ferm: 'Fermentation:', ywn: 'yeast, warm', then: 'Then, for each', out: 'out.'});
const ROWS = [
	{eq: 'CH_2=CH_2 + H_2O ⇌ CH_3CH_2OH', c: 'H_3PO_4 catalyst, about 300 °C, 60 to 70 atm', sep: 'recycle ethene, distil'},
	{eq: 'CH_3CH_2Br + NaOH(aq) → CH_3CH_2OH + NaBr', c: 'aqueous hydroxide, heat under reflux', sep: 'distil'},
	{eq: 'C_6H_12O_6 → 2C_2H_5OH + 2CO_2', c: 'yeast, about 35 °C, no air', sep: 'filter, then distil'},
];
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K11.hyd, K11.sub, K11.ferm];
	const rowO = (i: number) => {
		const nx = at[i + 1];
		const dimmed = nx === undefined ? 1 : 1 - 0.45 * prog(f, nx, 12);
		return dimmed * (1 - prog(f, K11.out, 12)) + 0.85 * prog(f, K11.out, 12);
	};
	return (
		<Overlay>
			<TaskLine text="Three routes to ethanol" at={K11.so} size={54} y={130} />
			{ROWS.map((r, i) => {
				const y = 200 + i * 150, v = vis(f, at[i]);
				if (v <= 0.01) return null;
				return (
					<g key={i} opacity={v * rowO(i)}>
						<rect x={120} y={y} width={1240} height={124} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
						<CT x={150} y={y + 56} text={r.eq} size={38} />
						<Sx x={150} y={y + 104} text={r.c} size={26} color={NAVY} weight={600} at={-1000} />
					</g>
				);
			})}
			<Sx x={1420} y={190} text="then separate:" size={34} color={INK_SOFT} hand at={K11.out - 6} />
			{ROWS.map((r, i) => <Tag key={'s' + i} x={1420} y={242 + i * 150} text={r.sep} at={K11.out + i * 6} size={28} color={TEAL} fill="#dff2ef" />)}
			<TaskLine text="Fermentation: yeast, warm, no air." at={K11.ferm + 20} size={72} x={300} y={800} color={TEAL} />
			{void K11.ywn}{void K11.then}{void GREY}{void INK}
		</Overlay>
	);
};
