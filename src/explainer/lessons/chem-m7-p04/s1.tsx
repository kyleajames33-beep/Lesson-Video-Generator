// M7 P04 scenes 1 to 7: the hook (the dichromate pair; three possible products), the aim and a fair set of alcohols (two
// isomers, a tertiary comparison, a water control), part A (the water-bath pair cross-fade sorts the alcohols), the
// variables (pen links to the plate), catching the aldehyde (distillation, the boiling-point ladder, the vapour path,
// the still-head reading), going all the way to the acid (reflux loop, equations, then distil a sample) and the
// secondary alcohol (propanone; no further oxidation).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, PenLink, Sx, TaskLine, smooth} from '../chem-m6-p02/parts';
import {Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {SkelAt} from '../chem-m7-c02/parts';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {Leader, Plate, Reflux, RingAt, ptOn} from '../chem-m7-c06/parts';
import {cAt, olM} from '../chem-m7-g03/board';
import {BATH, BP, DICH, DISTIL, DP, Heading, REFLUX, RP, sc} from './common';
import {ALC, AMB, BathP, Dropper, GREENC, GREY, INK, INK_SOFT, Ladder, NAVY, RED, TEAL, Vapour, bpt, tertM, tubeLiq, tubeTop} from './parts';
import type {BPos} from './parts';

/** Teacher-demonstration chip beside the task line. */
export const Demo: React.FC<{at?: number}> = ({at = -100}) => <Tag x={1824} y={104} text="teacher demonstration" at={at} size={22} anchor="end" />;
const dpt = (P: {cx: number; top: number; h: number}, k: keyof typeof DP): V2 => ptOn(DISTIL, P.cx, P.top, P.h, DP[k][0], DP[k][1]);
export const vapourPts = (P: {cx: number; top: number; h: number}): V2[] => [dpt(P, 'flask'), dpt(P, 'head'), dpt(P, 'c0'), dpt(P, 'c1'), dpt(P, 'drip')];
export {dpt};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {green: 'green', oxid: 'oxidised', what: 'what', ald: 'aldehyde', ket: 'ketone', acid: 'acid', here: 'Here', one: 'one answer'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const T = {cx: 600, top: 250, h: 600};
	const liq = ptOn(DICH.orange, T.cx, T.top, T.h, 990, 1350);
	const chips = [{t: 'aldehyde: –CHO ?', at: K1.ald}, {t: 'ketone: C=O inside the chain ?', at: K1.ket}, {t: 'acid: –COOH ?', at: K1.acid}];
	const mag = smooth(prog(f, K1.one, 24));
	return (
		<>
			<Heading text="Orange to green: so what did you make?" at={4} size={54} />
			<Overlay>
				<Plate p={DICH.orange} to={DICH.green} swap={K1.green} cx={T.cx} top={T.top} h={T.h} />
				<Tag x={T.cx} y={880} text="green: something was oxidised" at={K1.oxid} size={26} color={GREENC} fill="#e3f3e9" anchor="middle" />
				{chips.map((c, i) => <Tag key={i} x={1060} y={380 + i * 110} text={c.t} at={c.at} size={32} color={NAVY} fill="#e7edf8" o={dimAt(f, K1.one, 0.45)} />)}
				<Sx x={1060} y={340} text="which one formed?" size={30} color={INK_SOFT} hand at={K1.what} />
				{mag > 0.01 ? (
					<g opacity={mag} transform={`translate(${liq[0] + (1 - mag) * 300},${liq[1] - 40})`}>
						<circle r={90} fill="none" stroke={INK} strokeWidth={6} />
						<line x1={64} y1={64} x2={140} y2={140} stroke={INK} strokeWidth={14} strokeLinecap="round" />
					</g>
				) : null}
				<Tag x={1060} y={760} text="make it, collect it, test it" at={K1.one} size={30} color={TEAL} fill="#dff2ef" />
				{void K1.here}
			</Overlay>
		</>
	);
};

// ---------- 2. Aim and a fair set ----------
const K2 = cues(sc('aim-and-alcohols'), {aim: 'The aim', p1: 'propan-1-ol', p2: 'propan-2-ol', same: 'same formula', where: 'where the', no: 'No tertiary', add: 'add', water: 'water', control: 'control'});
export const SceneAim: React.FC = () => {
	const f = useCurrentFrame();
	const s = 0.95;
	const oh = (n: number, c: number, x: number, y: number): V2 => { const m = olM(n, c); const p = m.pts[n]; return [x + p[0] * s + 14, y + p[1] * s]; };
	return (
		<Overlay>
			<TaskLine text="Aim: investigate the products of oxidising 1° and 2° alcohols" at={K2.aim} size={44} y={130} />
			<SkelAt m={olM(3, 0)} x={330} y={470} s={s} at={K2.p1} color={ALC[0].c} width={6} />
			<Tag x={330} y={580} text="propan-1-ol" at={K2.p1} size={28} color={ALC[0].c} fill={ALC[0].f} anchor="middle" />
			<SkelAt m={olM(3, 1)} x={790} y={470} s={s} at={K2.p2} color={ALC[1].c} width={6} />
			<Tag x={790} y={580} text="propan-2-ol" at={K2.p2} size={28} color={ALC[1].c} fill={ALC[1].f} anchor="middle" />
			<RingAt c={oh(3, 0, 330, 470)} rx={44} ry={34} at={K2.where} />
			<RingAt c={oh(3, 1, 790, 470)} rx={44} ry={34} at={K2.where + 8} />
			<Tag x={560} y={660} text="both C₃H₈O: only the OH's position differs" at={K2.same} size={26} anchor="middle" o={dimAt(f, K2.no, 0.5)} />
			<SkelAt m={tertM(4)} x={1240} y={430} s={0.75} at={K2.no} color={ALC[2].c} width={6} />
			<Tag x={1240} y={580} text="2-methylpropan-2-ol" at={K2.add} size={26} color={ALC[2].c} fill={ALC[2].f} anchor="middle" />
			<Tag x={1240} y={660} text="tertiary: no C₃ option, so C₄" at={K2.add + 10} size={24} anchor="middle" o={dimAt(f, K2.water, 0.5)} />
			<Tag x={1650} y={440} text="water" at={K2.water} size={32} color={ALC[3].c} fill={ALC[3].f} anchor="middle" />
			<Tag x={1650} y={760} text="control: same treatment, no alcohol" at={K2.control} size={26} color={NAVY} fill="#e7edf8" anchor="end" />
		</Overlay>
	);
};

// ---------- 3. Part A ----------
const K3 = cues(sc('part-a-colour'), {part: 'Part one', demo: 'demonstration', same: 'same volume', five: 'five drops', bath: 'water bath', sixty: 'sixty', after: 'After a', green: 'green', orange: 'orange', warming: 'warming alone'});
export const PA: BPos = {cx: 560, top: 260, h: 620};
export const TubeMarks: React.FC<{P: BPos; at: number; o?: number}> = ({P, at, o = 1}) => (
	<g opacity={o}>{ALC.map((a, i) => { const t = tubeTop(P, i); return <Tag key={i} x={t[0]} y={t[1] - 52} text={a.s} at={at + i * 6} size={22} color={a.c} fill={a.f} anchor="middle" />; })}</g>
);
export const ScenePartA: React.FC = () => {
	const f = useCurrentFrame();
	const P = PA;
	const steps = [
		{t: ['1  2 mL acidified K₂Cr₂O₇ in each tube'], at: K3.same},
		{t: ['2  5 drops: propan-1-ol (1°), propan-2-ol (2°),', '    2-methylpropan-2-ol (3°), water'], at: K3.five},
		{t: ['3  water bath, about 60 °C, about 5 min'], at: K3.bath},
	];
	const t12 = [(tubeLiq(P, 0)[0] + tubeLiq(P, 1)[0]) / 2, (tubeLiq(P, 2)[0] + tubeLiq(P, 3)[0]) / 2];
	const bot = P.top + P.h;
	return (
		<Overlay>
			<TaskLine text="Part A: which ones are oxidised?" at={K3.part} size={50} y={130} />
			<Demo at={K3.demo} />
			<BathP P={P} swap={K3.green} />
			<Dropper stops={[0, 1, 2, 3].map(i => tubeTop(P, i))} at={K3.same + 10} gap={16} s={0.6} drop={40} />
			<Dropper stops={[0, 1, 2, 3].map(i => tubeTop(P, i))} at={K3.five + 10} gap={18} s={0.6} drop={40} />
			<TubeMarks P={P} at={K3.five + 10} />
			{steps.map((s, i) => {
				const nx = steps[i + 1];
				return <g key={i} opacity={nx ? dimAt(f, nx.at, 0.4) : 1}>{s.t.map((l, k) => <Sx key={k} x={1000} y={300 + i * 120 + k * 40} text={l} size={28} color={INK} weight={600} at={s.at} />)}</g>;
			})}
			<Tag x={1000} y={640} text="no flame: the alcohols are flammable" at={K3.sixty} size={22} />
			<g opacity={vis(f, K3.green)}>
				<path d={`M${tubeLiq(P, 0)[0]},${bot - 60} L${tubeLiq(P, 0)[0]},${bot - 40} L${tubeLiq(P, 1)[0]},${bot - 40} L${tubeLiq(P, 1)[0]},${bot - 60} M${t12[0]},${bot - 40} L${t12[0]},${bot + 6}`} fill="none" stroke={GREENC} strokeWidth={4} />
			</g>
			<Tag x={t12[0]} y={bot + 6} text="1°, 2°: green: oxidised" at={K3.green} size={26} color={GREENC} fill="#e3f3e9" anchor="middle" />
			<g opacity={vis(f, K3.orange)}>
				<path d={`M${tubeLiq(P, 2)[0]},${bot - 60} L${tubeLiq(P, 2)[0]},${bot - 40} L${tubeLiq(P, 3)[0]},${bot - 40} L${tubeLiq(P, 3)[0]},${bot - 60} M${t12[1]},${bot - 40} L${t12[1]},${bot + 56}`} fill="none" stroke="#b5561a" strokeWidth={4} />
			</g>
			<Tag x={t12[1] + 40} y={bot + 56} text="3°, control: orange: no reaction" at={K3.orange} size={26} color="#b5561a" fill="#fbe2cc" anchor="middle" />
			<Tag x={1000} y={760} text="warming alone didn't turn it green" at={K3.warming} size={26} color={NAVY} fill="#e7edf8" />
			{void K3.after}{void BATH}{void BP}
		</Overlay>
	);
};

// ---------- 4. The variables ----------
const K4 = cues(sc('variables'), {what: 'What changes', class: 'class', observe: 'observe', keep: 'Keep', vol: 'volume', drops: 'number of drops', bath: 'bath temperature', time: 'heating time', same: ['same', 2]});
export const SceneVariables: React.FC = () => {
	const f = useCurrentFrame();
	const P: BPos = {cx: 470, top: 270, h: 600};
	const items: {t: string; at: number; to: V2}[] = [
		{t: '2 mL acidified K₂Cr₂O₇ (same concentration)', at: K4.vol, to: tubeLiq(P, 0)},
		{t: '5 drops', at: K4.drops, to: tubeTop(P, 1)},
		{t: '60 °C bath', at: K4.bath, to: bpt(P, BP.thermo[0], BP.thermo[1])},
		{t: '5 min', at: K4.time, to: bpt(P, BP.dial[0], BP.dial[1])},
	];
	return (
		<Overlay>
			<TaskLine text="What changes, and what stays the same?" at={K4.what} size={50} y={130} />
			<Demo />
			<BathP P={P} after />
			<TubeMarks P={P} at={-100} />
			<Sx x={940} y={260} text="Independent: the alcohol's class (1°, 2°, 3°)" size={32} color={NAVY} weight={800} at={K4.class} opacity={dimAt(f, K4.observe, 0.5)} />
			<Sx x={940} y={340} text="Dependent: dichromate colour; product test results" size={30} color={INK} weight={700} at={K4.observe} opacity={dimAt(f, K4.keep, 0.5)} />
			<Sx x={940} y={430} text="Controlled:" size={34} color={GREENC} weight={800} at={K4.keep} />
			{items.map((it, i) => {
				const y = 490 + i * 56;
				return (
					<g key={i}>
						<Sx x={970} y={y} text={it.t} size={28} color={INK} weight={600} at={it.at} />
						<PenLink a={[960, y - 10]} b={it.to} at={it.at + 4} out={items[i + 1]?.at ?? K4.same + 40} />
					</g>
				);
			})}
			<Tag x={970} y={740} text="isomers: same C count, C₃H₈O" at={K4.same} size={24} color={TEAL} fill="#dff2ef" />
			<Sx x={940} y={960} text="Control: water instead of alcohol" size={24} color={INK_SOFT} weight={600} at={K4.keep + 20} />
		</Overlay>
	);
};

// ---------- 5. Catching the aldehyde ----------
const K5 = cues(sc('distil-aldehyde'), {part: 'Part two', first: 'first product', dist: 'distillation', add: 'Add the', collect: 'collect what', propanal: 'Propanal boils', fe: 'forty eight', fifty: 'fifty degrees', below: 'below the', again: 'again', still: 'A still-head', near: 'near fifty', supports: 'supports'});
export const PD = {cx: 700, top: 330, h: 560};
export const SceneDistil: React.FC = () => {
	const f = useCurrentFrame();
	const P = PD;
	const recv = dpt(P, 'recv'), th = dpt(P, 'thermo'), fl = dpt(P, 'flask');
	return (
		<Overlay>
			<TaskLine text="Part B: make, collect, test" at={K5.part} size={50} y={130} />
			<Demo />
			<Plate p={DISTIL} cx={P.cx} top={P.top} h={P.h} at={K5.part} />
			<Tag x={96} y={250} text="propan-1-ol → its first product" at={K5.first} size={24} color={ALC[0].c} fill={ALC[0].f} />
			<g opacity={dimAt(f, K5.propanal, 0.4)}>
				<Leader a={[recv[0] + 40, recv[1] + 110]} b={[recv[0], recv[1] + 20]} at={K5.dist} />
				<Tag x={recv[0] - 40} y={recv[1] + 110} text="distillate: the liquid collected" at={K5.dist} size={22} />
			</g>
			<Dropper stops={[[fl[0] - 70, fl[1] - 120], [fl[0] - 70, fl[1] - 120]]} at={K5.add} gap={40} s={0.7} drop={40} />
			<Tag x={96} y={290} text="add the alcohol slowly; distil at once" at={K5.add + 10} size={24} o={dimAt(f, K5.again, 0.5)} />
			<Ladder x={1300} y0={300} y1={800} at={K5.propanal} ticks={[{v: 48, t: 'propanal 48 °C', at: K5.fe, color: NAVY}, {v: 97, t: 'propan-1-ol 97 °C', at: K5.below, color: ALC[0].c}]} bracket={{a: 48, b: 97, t: '≈ 50 °C apart', at: K5.fifty + 10}} />
			<Vapour pts={vapourPts(P)} at={K5.again} />
			<Tag x={P.cx - 330} y={905} text="aldehyde leaves before it meets more oxidant" at={K5.again} size={24} color={NAVY} fill="#e7edf8" o={dimAt(f, K5.still, 0.5)} />
			<Tag x={P.cx - 330} y={955} text="c08a: distil to catch the aldehyde" at={K5.again + 16} size={20} o={dimAt(f, K5.still, 0.5)} />
			<g opacity={vis(f, K5.still)}>
				<rect x={th[0] - 194} y={th[1] - 30} width={170} height={48} rx={10} fill="#fff3d9" stroke={AMB} strokeWidth={3} />
				<Sx x={th[0] - 109} y={th[1] + 4} text="about 49 °C" size={26} color={AMB} anchor="middle" weight={800} at={-1000} />
			</g>
			<Tag x={th[0] - 194} y={th[1] + 30} text="a guide, not proof" at={K5.supports} size={20} />
			{void K5.collect}{void K5.near}{void RED}{void GREY}
		</Overlay>
	);
};

// ---------- 6. All the way to the acid ----------
const K6 = cues(sc('reflux-acid'), {acid: 'For the acid', reflux: 'reflux', cond: 'The condenser', ald: 'any aldehyde', becomes: 'becomes', prop: 'propanoic acid', then: 'Then rearrange', distil: 'distil off'});
export const SceneReflux: React.FC = () => {
	const f = useCurrentFrame();
	const sl = smooth(prog(f, K6.distil, 24));
	const cx = 640 - sl * 200;
	const P = {cx, top: 230, h: 660};
	const base = ptOn(REFLUX, cx, P.top, P.h, RP.flask[0], RP.flask[1]), top = ptOn(REFLUX, cx, P.top, P.h, RP.top[0], RP.top[1]);
	return (
		<Overlay>
			<TaskLine text="Part B: the acid" at={-100} size={50} y={130} />
			<Demo />
			<Plate p={REFLUX} cx={cx} top={P.top} h={P.h} />
			<Tag x={960} y={250} text="excess acidified K₂Cr₂O₇; reflux about 20 min" at={K6.reflux} size={28} color={NAVY} fill="#e7edf8" o={dimAt(f, K6.prop, 0.5)} />
			<Reflux base={[base[0], base[1] - 30]} top={top} at={K6.cond} until={K6.then} />
			<Vapour pts={[[base[0] - 16, base[1] - 40], [top[0] - 16, top[1]]]} at={K6.cond} out={K6.then + 20} />
			<Vapour pts={[[top[0] + 18, top[1] + 10], [base[0] + 18, base[1] - 40]]} at={K6.cond + 20} out={K6.then + 20} color="#4f86ad" />
			<Tag x={960} y={330} text="aldehyde returns to the oxidant" at={K6.ald} size={26} color={TEAL} fill="#dff2ef" o={dimAt(f, K6.prop + 20, 0.5)} />
			<Tag x={960} y={400} text="c08a: reflux to go all the way" at={K6.ald + 20} size={20} o={dimAt(f, K6.prop + 20, 0.5)} />
			<Sx x={960} y={540} text="CH₃CH₂CH₂OH + [O] → CH₃CH₂CHO + H₂O" size={30} color={GREY} weight={700} at={K6.becomes} />
			<Sx x={960} y={600} text="CH₃CH₂CH₂OH + 2[O] → CH₃CH₂COOH + H₂O" size={32} color={INK} weight={800} at={K6.prop} />
			<g opacity={vis(f, K6.distil)}>
				<Plate p={DISTIL} cx={1430} top={720} h={240} />
				<Tag x={960} y={700} text="then distil a sample" at={K6.distil + 10} size={26} color={NAVY} fill="#e7edf8" />
			</g>
			{void K6.acid}
		</Overlay>
	);
};

// ---------- 7. The secondary alcohol ----------
const K7 = cues(sc('secondary-ketone'), {p2: 'Propan-2-ol', heat: 'Heat it', distil: 'distil off', propanone: 'propanone', dich: "Dichromate doesn't", timing: 'timing'});
export const SceneKetone: React.FC = () => {
	const f = useCurrentFrame();
	const P = PD;
	const fl = dpt(P, 'flask');
	return (
		<Overlay>
			<TaskLine text="Part B: the secondary alcohol" at={-100} size={50} y={130} />
			<Demo />
			<Plate p={DISTIL} cx={P.cx} top={P.top} h={P.h} />
			<Tag x={fl[0] - 130} y={fl[1] - 220} text="propan-2-ol" at={K7.p2} size={26} color={ALC[1].c} fill={ALC[1].f} anchor="middle" />
			<Vapour pts={vapourPts(P)} at={K7.distil} out={K7.dich + 40} />
			<Sx x={140} y={960} text="CH₃CH(OH)CH₃ + [O] → CH₃COCH₃ + H₂O" size={34} color={INK} weight={800} at={K7.propanone} />
			<Ladder x={1300} y0={300} y1={800} at={-100} ticks={[{v: 48, t: 'propanal 48 °C', at: -100, color: GREY}, {v: 97, t: 'propan-1-ol 97 °C', at: -100, color: GREY}, {v: 56, t: 'propanone 56 °C', at: K7.propanone + 10, color: NAVY}, {v: 82, t: 'propan-2-ol 82 °C', at: K7.propanone + 20, color: ALC[1].c}]} />
			<Tag x={1260} y={850} text="ketone: no H on the carbonyl carbon," at={K7.dich} size={24} color={NAVY} fill="#e7edf8" />
			<Tag x={1260} y={900} text="no further oxidation (c08b)" at={K7.dich + 8} size={24} color={NAVY} fill="#e7edf8" />
			{void K7.heat}{void K7.timing}{void cAt}{void RED}
		</Overlay>
	);
};
