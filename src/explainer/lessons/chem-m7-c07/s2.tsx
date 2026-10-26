// M7 C07 scenes 7 to 12: per gram is what matters (the ladder re-scales; octane; the oxygen and the partly oxidised
// carbon; litre bars), same products but different carbon (the two carbon loops), not automatically carbon neutral (the
// production arrows), obtaining hydrocarbons (the implications board), judging the fuel (the criteria card) and the
// memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TaskLine, smooth} from '../chem-m6-c01/parts';
import {Tag, TickMark} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {Arrow2, EqRow, Plate} from '../chem-m7-c06/parts';
import {RIG, sc} from './common';
import {ALC, AirLine, CaneLoop, FOSSIL, FossilLoop, GREENC, HEAT_INK, INK, INK_SOFT, LD, Ladder, MiniBars, MiniLadder, NAVY, OCT, RED, TEAL, rowY} from './parts';
import {E10Bar} from './s1';

// ---------- 7. Per gram ----------
const K7 = cues(sc('per-gram'), {but: 'But a bigger', weighs: 'weighs', fuel: 'For a fuel', gram: 'per gram matters', div: 'Divide by', thirty: 'thirty kilojoules', oct: 'Octane,', f48: 'forty eight.', why: 'Why less', its: 'Its oxygen', part: 'partly oxidised', litre: 'Per litre,', pct: 'thirty percent'});
export const SceneGram: React.FC = () => {
	const f = useCurrentFrame();
	const rowO = (i: number) => (i === 1 ? 1 : dimAt(f, K7.f48, 0.4));
	const valO = dimAt(f, K7.litre, 0.35);
	const lg = smooth(prog(f, K7.litre + 6, 24));
	const ly = [860, 930];
	return (
		<Overlay>
			<TaskLine text="Enthalpy of combustion along the series" at={-100} out={K7.gram} size={48} y={130} />
			<TaskLine text="Energy per gram" at={K7.gram + 10} size={54} y={130} />
			<Tag x={1880} y={150} text="energy density: kJ per gram" at={K7.gram + 24} size={26} color={NAVY} fill="#e7edf8" anchor="end" o={dimAt(f, K7.its, 0.5)} />
			<Ladder at={[-100, -100, -100, -100]} unitsAt={-100} gram={K7.gram} massAt={K7.weighs} rowO={rowO} valO={valO} octAt={K7.oct} ringO={{at: K7.its, out: K7.part}} ringC={{at: K7.part}} />
			<g opacity={vis(f, K7.thirty) * dimAt(f, K7.litre, 0.4)}><rect x={LD.bx - 6} y={rowY(1) - 34} width={29.7 * LD.kG + 12} height={52} rx={12} fill="none" stroke={HEAT_INK} strokeWidth={4} /></g>
			<Tag x={1290} y={rowY(1) - 26} text="O adds 16 g mol⁻¹, no energy" at={K7.its + 6} out={K7.part} size={26} color={RED} fill="#f9e1dc" />
			<Tag x={1290} y={rowY(1) - 26} text="partly oxidised: already bonded to oxygen" at={K7.part + 6} size={26} color={RED} fill="#f9e1dc" />
			<g opacity={vis(f, K7.litre)}>
				<Sx x={LD.x} y={ly[0] + 6} text="per litre:" size={28} color={INK_SOFT} hand at={-1000} />
				<rect x={LD.bx} y={ly[0] - 24} width={460 * lg} height={36} rx={8} fill={ALC} />
				<Sx x={LD.bx + 460 * lg + 14} y={ly[0] + 4} text="ethanol about 23 MJ L⁻¹" size={26} color={INK} weight={800} at={-1000} />
				<rect x={LD.bx} y={ly[1] - 24} width={680 * lg} height={36} rx={8} fill={OCT} />
				<Sx x={LD.bx + 680 * lg + 14} y={ly[1] + 4} text="petrol about 34 MJ L⁻¹" size={26} color={INK} weight={800} at={-1000} />
			</g>
			<Tag x={LD.bx + 470} y={ly[0] - 74} text="about 30% less" at={K7.pct} size={26} color={HEAT_INK} fill="#fbe2cc" />
			{void K7.but}{void K7.fuel}{void K7.div}{void K7.why}
		</Overlay>
	);
};

// ---------- 8. Same products, different carbon ----------
const K8 = cues(sc('same-products-carbon'), {so: 'So why use', burn: 'Burn ethanol', same: 'same products', diff: 'The difference', ferm: 'fermented', cane: 'sugarcane,', took: 'took carbon', soburn: 'So burning that', recent: 'recently', pet: "Petrol's", under: 'underground', adds: 'adds extra'});
export const LOOPT = (K: {cane: number; took: number; ferm: number; soburn: number}) => ({cane: K.cane, took: K.took, ferm: K.took + 50, bottle: K.took + 60, burn: K.soburn});
export const SceneCarbon: React.FC = () => {
	const f = useCurrentFrame();
	const st = dimAt(f, K8.diff, 0.3);
	return (
		<Overlay>
			<TaskLine text="Ethanol or petrol?" at={K8.so} size={54} y={130} />
			<g opacity={st}>
				<EqRow left={[{t: 'C_2H_5OH', at: K8.burn}, {t: '+', at: K8.burn}, {t: '3O_2', at: K8.burn}]} right={[{t: '2CO_2', at: K8.burn + 6, box: K8.same}, {t: '+', at: K8.burn + 6}, {t: '3H_2O', at: K8.burn + 6, box: K8.same}]} cx={500} y={250} size={30} len={100} arrow={{at: K8.burn + 4}} />
				<EqRow left={[{t: '2C_8H_18', at: K8.burn + 12}, {t: '+', at: K8.burn + 12}, {t: '25O_2', at: K8.burn + 12}]} right={[{t: '16CO_2', at: K8.burn + 18, box: K8.same}, {t: '+', at: K8.burn + 18}, {t: '18H_2O', at: K8.burn + 18, box: K8.same}]} cx={1400} y={250} size={30} len={100} arrow={{at: K8.burn + 16}} />
				<Tag x={960} y={292} text="same products" at={K8.same + 6} size={28} color={NAVY} fill="#e7edf8" anchor="middle" />
			</g>
			<AirLine at={K8.diff} />
			<CaneLoop T={LOOPT({cane: K8.cane, took: K8.took, ferm: K8.ferm, soburn: K8.soburn})} tagO={dimAt(f, K8.under, 0.35)} />
			<Tag x={560} y={1000} text="recent carbon: back to the air" at={K8.recent} size={30} color={GREENC} fill="#e3f3e9" anchor="middle" />
			<FossilLoop T={{barrel: K8.under, burn: K8.under + 30}} />
			<Tag x={1480} y={1000} text="fossil carbon: extra CO_2" at={K8.adds} size={30} color={FOSSIL} fill="#efe4d6" anchor="middle" />
			{void K8.pet}
		</Overlay>
	);
};

// ---------- 9. Not automatically carbon neutral ----------
const K9 = cues(sc('not-carbon-neutral'), {that: "That doesn't", cn: 'carbon neutral,', as: 'As you saw', energy: 'takes energy,', grow: 'growing,', ferm: 'fermenting,', fossil: 'fossil fuels.', land: 'land and water', case: "So ethanol's", net: 'less net'});
const AIRYP = 350;
const Prod: React.FC<{a: [number, number]; b: [number, number]; t: string; lx: number; ly: number; at: number}> = ({a, b, t, lx, ly, at}) => (
	<g>
		<Arrow2 a={a} b={b} at={at} color={FOSSIL} width={5} head={12} />
		<Sx x={lx} y={ly} text={t} size={24} color={FOSSIL} weight={800} anchor="middle" at={at + 6} />
	</g>
);
export const SceneNeutral: React.FC = () => {
	const T = LOOPT({cane: -200, took: -200, ferm: -200, soburn: -200});
	return (
		<Overlay>
			<TaskLine text="Ethanol or petrol?" at={-100} size={54} y={130} />
			<AirLine at={-100} />
			<CaneLoop T={T} tagO={0.35} />
			<Tag x={300} y={1000} text="recent carbon: back to the air" at={-100} size={30} color={GREENC} fill="#e3f3e9" anchor="middle" o={0.6} />
			<FossilLoop T={{barrel: -200, burn: -200}} o={0.08} />
			<Tag x={960} y={220} text="carbon neutral?" at={K9.cn - 20} out={K9.as + 30} size={30} o={0.7} anchor="middle" />
			<Tag x={960} y={280} text="carbon neutral: adds no net CO_2" at={K9.cn} out={K9.as + 30} size={22} anchor="middle" />
			<Prod a={[1060, 640]} b={[960, 690]} t="distil" lx={1110} ly={630} at={K9.energy} />
			<Prod a={[120, 760]} b={[200, 730]} t="grow and harvest" lx={150} ly={800} at={K9.grow} />
			<Prod a={[700, 1000]} b={[690, 945]} t="ferment" lx={790} ly={1010} at={K9.ferm} />
			<Sx x={1000} y={AIRYP} text="+ CO_2" size={28} color={FOSSIL} anchor="middle" weight={800} at={K9.fossil} />
			<Tag x={1240} y={600} text="production energy: some net CO_2" at={K9.fossil + 6} size={28} color={FOSSIL} fill="#efe4d6" />
			<Tag x={1240} y={680} text="land and water: food crops compete" at={K9.land} size={28} color={NAVY} fill="#e7edf8" />
			<Tag x={1240} y={760} text="renewable, can add less net CO_2" at={K9.net} size={26} color={GREENC} fill="#e3f3e9" />
			{void K9.that}{void K9.case}
		</Overlay>
	);
};

// ---------- 10. Obtaining hydrocarbons from the Earth ----------
const K10 = cues(sc('obtaining-hydrocarbons'), {pet: 'Petrol has', taken: 'taken from', drill: 'Drilling,', econ: 'economic', jobs: 'jobs,', secure: 'secure energy', env: 'environmental', spills: 'oil spills', water: 'water contamination.', socio: 'sociocultural', aff: 'affecting communities', often: 'They often', abor: 'Aboriginal', rather: 'rather than'});
type ILine = {t: string; at: number; grey?: boolean};
const Col: React.FC<{x: number; title: string; at: number; lines: ILine[]; dimAt0?: number; color: string}> = ({x, title, at, lines, dimAt0, color}) => {
	const f = useCurrentFrame();
	const v = vis(f, at - 30);
	if (v <= 0.01) return null;
	const d = dimAt0 === undefined ? 1 : dimAt(f, dimAt0, 0.32);
	const head = dimAt0 === undefined ? 1 : dimAt(f, dimAt0, 0.6);
	return (
		<g opacity={v}>
			<rect x={x} y={440} width={560} height={350} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
			<g opacity={head}><Sx x={x + 28} y={500} text={title} size={46} color={color} hand weight={700} at={at} /></g>
			<g opacity={d}>{lines.map((l, i) => <Sx key={i} x={x + 30} y={570 + i * 60} text={l.t} size={l.grey ? 24 : 28} color={l.grey ? INK_SOFT : INK} weight={600} at={l.at} />)}</g>
		</g>
	);
};
export const SceneObtain: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Obtaining hydrocarbons from the Earth" at={K10.pet} size={48} y={130} />
			<Plate p={RIG} cx={960} top={170} h={240} at={K10.taken} />
			<Col x={96} title="Economic" at={K10.econ} color="#2d6f9e" dimAt0={K10.env} lines={[{t: 'jobs, export income', at: K10.jobs}, {t: 'energy security', at: K10.secure}]} />
			<Col x={680} title="Environmental" at={K10.env} color={GREENC} dimAt0={K10.socio} lines={[{t: 'oil spills, habitat loss', at: K10.spills}, {t: 'possible water contamination', at: K10.water - 6}, {t: '(fracking, contested)', at: K10.water + 20, grey: true}]} />
			<Col x={1264} title="Sociocultural" at={K10.socio} color={RED} lines={[{t: 'community health and opposition', at: K10.often}, {t: 'Aboriginal and Torres Strait Islander', at: K10.abor}, {t: 'land and sea Country', at: K10.abor + 24}]} />
			<Tag x={1544} y={812} text="sociocultural: affecting communities and culture" at={K10.aff} out={K10.rather} size={22} anchor="middle" />
			<Arrow2 a={[1080, 300]} b={[1440, 432]} bend={-40} at={K10.rather} color={RED} width={5} />
			<Tag x={1300} y={240} text="costs fall near the site" at={K10.rather + 10} size={30} color={RED} fill="#f9e1dc" />
			{void K10.drill}{void f}
		</Overlay>
	);
};

// ---------- 11. Judging the fuel ----------
const K11 = cues(sc('judge-fuel'), {which: 'So which fuel', judge: 'Judge each', litre: 'per litre,', carbon: 'its carbon', prod: 'what producing', obt: 'what obtaining', petw: 'Petrol wins', energy: 'on energy.', ethw: 'Ethanol wins', renew: 'renewable', comp: 'compromise,'});
const CRIT = [
	{l: 'energy per gram', e: '29.7', p: '47.9 kJ g⁻¹'},
	{l: 'energy per litre', e: 'about 23', p: 'about 34 MJ L⁻¹'},
	{l: 'carbon', e: 'recent (crops)', p: 'fossil'},
	{l: 'production', e: 'farming, fermenting, distilling', p: 'drilling, refining'},
	{l: 'land and people', e: 'crop land, water', p: 'extraction sites'},
];
export const SceneFuel: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K11.judge, K11.litre, K11.carbon, K11.prod, K11.obt];
	const EX = 940, PX = 1480, Y0 = 300, DY = 92;
	const rowO = (i: number) => {
		const nx = at[i + 1] ?? K11.petw;
		let o = 1 - 0.55 * prog(f, nx, 12);
		if (i <= 1) o = Math.max(o, prog(f, K11.petw, 12) * (1 - 0.45 * prog(f, K11.comp + 30, 12)));
		if (i === 2) o = Math.max(o, prog(f, K11.renew, 12) * (1 - 0.45 * prog(f, K11.comp + 30, 12)));
		return o;
	};
	return (
		<Overlay>
			<TaskLine text="So which fuel?" at={K11.which} size={54} y={130} />
			<g opacity={vis(f, K11.judge - 10)}>
				<rect x={160} y={200} width={1640} height={DY * 5 + 70} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
				<Sx x={EX} y={250} text="ethanol" size={36} color="#8a5a0c" anchor="middle" hand weight={700} at={-1000} />
				<Sx x={PX} y={250} text="petrol" size={36} color="#4f6f8f" anchor="middle" hand weight={700} at={-1000} />
			</g>
			{CRIT.map((r, i) => {
				const y = Y0 + i * DY + 40, v = vis(f, at[i]);
				if (v <= 0.01) return null;
				return (
					<g key={i} opacity={v * rowO(i)}>
						<line x1={180} x2={1780} y1={y - 52} y2={y - 52} stroke="rgba(60,45,20,0.12)" strokeWidth={2} />
						<Sx x={200} y={y} text={r.l} size={30} color={INK} weight={700} at={-1000} />
						<Sx x={EX} y={y} text={r.e} size={28} color={INK} anchor="middle" weight={600} at={-1000} />
						<Sx x={PX} y={y} text={r.p} size={28} color={INK} anchor="middle" weight={600} at={-1000} />
					</g>
				);
			})}
			<TickMark x={1720} y={Y0 + 40 - 10} at={K11.energy} />
			<TickMark x={1720} y={Y0 + DY + 40 - 10} at={K11.energy + 6} />
			<TickMark x={1160} y={Y0 + 2 * DY + 40 - 10} at={K11.renew + 6} />
			<Tag x={960} y={790} text="renewable means better?" at={K11.renew + 30} out={K11.renew + 100} size={28} o={0.65} anchor="middle" />
			<E10Bar x={560} y={880} w={420} h={50} at={K11.comp} />
			<Tag x={1010} y={884} text="E10: some of each" at={K11.comp + 10} size={32} color={GREENC} fill="#e3f3e9" />
			{void K11.petw}{void K11.ethw}{void TEAL}
		</Overlay>
	);
};

// ---------- 12. Memory aid ----------
const K12 = cues(sc('memory-aid'), {two: 'Two lines', pm: 'Per mole,', adds: 'C H two adds', pg: 'Per gram,', costs: 'oxygen costs', which: 'And whichever', unless: 'unless'});
export const SceneAid: React.FC = () => (
	<Overlay>
		<TaskLine text="Per mole: each CH_2 adds about 650 kJ." at={K12.pm} size={64} x={160} y={250} color={TEAL} />
		<MiniLadder x={180} y={300} at={K12.adds} />
		<TaskLine text="Per gram: oxygen costs energy." at={K12.pg} size={64} x={160} y={580} color={TEAL} />
		<MiniBars x={180} y={630} at={K12.costs} />
		<Tag x={160} y={860} text="short of O_2 → CO and soot" at={K12.unless} size={32} color={NAVY} fill="#e7edf8" />
		{void K12.two}{void K12.which}
	</Overlay>
);
