// M7 C06 scenes 1 to 6: the hook (one product, three starting materials on the route board), hydration recalled (the
// equilibrium arrow; two gas molecules become one), the catalyst and the temperature compromise (the balance), the
// recycle loop and the separation, substitution (the swap, then the dipole tug on C–Br) and the reflux and same-carbon
// scene (vapour return on the reflux plate; 2-bromopropane to propan-2-ol).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {MULTI, NameBuilder, Place, Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {BROM, CARD_ROWS, CT, CondCard, Mol2D, Plus, RxArrow, apt, cmol, dimAt, loc, pulseAt, vis} from '../chem-m7-c04a/parts';
import {FreeAtom} from '../chem-m7-c04b/parts';
import {BARREL, BOTTLE, DISTIL, FERM, Heading, REFLUX, sc} from './common';
import {Arrow2, BOXC, ColFrame, EqRow, GREY, INK, INK_SOFT, Leader, NAVY, Plate, RED, Reflux, RingAt, eqLay, ptOn} from './parts';
import type {ET} from './parts';

const AMBER_R = '#c98a1b';
export const ETHENE = cmol([{ul: 'H', dl: 'H'}, {ur: 'H', dr: 'H'}], [2]);
export const BRE = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'Br'}]);

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {bottle: 'This bottle', sugar: 'sugar,', ethene: 'ethene,', halo: 'haloalkane,', bromo: 'bromoethane,', same: 'Same molecule', how: 'So how', start: 'what you start', cond: 'the conditions', out: 'ethanol out'});
const COLX = [390, 960, 1530];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const lab = dimAt(f, K1.same + 20, 0.35);
	const chip = (t: string, at: number, next: number | undefined, y: number) => <Tag x={150} y={y} text={t} at={at} size={30} color={NAVY} fill="#e7edf8" o={next === undefined ? 1 : 1 - 0.3 * prog(f, next, 10)} />;
	return (
		<>
			<Heading text="How can we make ethanol?" at={4} size={60} />
			<Overlay>
				{COLX.map((x, i) => <ColFrame key={i} x={x - 260} y={200} w={520} h={340} at={20 + i * 8} />)}
				<Plate p={FERM.start} cx={COLX[0]} top={225} h={215} at={K1.sugar} />
				<Sx x={COLX[0]} y={500} text="glucose + yeast" size={30} color={INK} anchor="middle" weight={700} at={K1.sugar + 6} opacity={lab} />
				<Plate p={BARREL} cx={COLX[1] - 110} top={235} h={200} at={K1.ethene} />
				<Mol2D m={ETHENE} x={COLX[1] + 90} y={330} s={0.72} at={K1.ethene + 10} />
				<Sx x={COLX[1]} y={500} text="crude oil or gas → ethene" size={30} color={INK} anchor="middle" weight={700} at={K1.ethene + 16} opacity={lab} />
				<Mol2D m={BRE} x={COLX[2]} y={330} s={0.85} at={K1.halo} />
				<Sx x={COLX[2]} y={480} text="bromoethane" size={30} color={INK} anchor="middle" weight={700} at={K1.bromo} opacity={lab} />
				<Sx x={COLX[2]} y={516} text="in a lab" size={24} color={GREY} anchor="middle" weight={600} at={K1.bromo + 10} opacity={lab} />
				<Plate p={BOTTLE} cx={960} top={640} h={270} at={K1.bottle} />
				<Sx x={960} y={955} text="ethanol, C_2H_5OH" size={32} color={INK} anchor="middle" weight={700} at={K1.bottle + 8} />
				<Arrow2 a={[COLX[0], 560]} b={[880, 700]} bend={-40} at={K1.same} color={INK_SOFT} />
				<Arrow2 a={[COLX[1], 560]} b={[960, 628]} at={K1.same + 6} color={INK_SOFT} />
				<Arrow2 a={[COLX[2], 560]} b={[1040, 700]} bend={40} at={K1.same + 12} color={INK_SOFT} />
				<Tag x={1080} y={720} text="same product" at={K1.same + 20} size={26} />
				<Sx x={150} y={690} text="choose by:" size={34} color={INK_SOFT} hand at={K1.start - 10} />
				{chip('start', K1.start, undefined, 720)}
				{chip('conditions', K1.cond, undefined, 790)}
				{chip('separation', K1.out, undefined, 860)}
				{void K1.how}
			</Overlay>
		</>
	);
};

// ---------- 2. Hydration recalled ----------
const K2 = cues(sc('hydration-equilibrium'), {start: 'Start with', add: 'addition video', es: 'ethene and steam', made: 'made ethanol', phos: 'phosphoric acid', three: 'three hundred', high: 'high pressure,', sixty: 'sixty to seventy', rem: 'Remember,', eq: 'equilibrium,', half: 'two half arrows', two: 'Two gas molecules', one: 'one,', push: 'pushes it'});
export const HY = {cx: 820, y: 560, size: 54, len: 300};
export const hydL = (at: number): ET[] => [{t: 'CH_2=CH_2', at, color: MULTI}, {t: '+', at: at + 6}, {t: 'H_2O', at: at + 10}];
export const hydR = (at: number): ET[] => [{t: 'CH_3CH_2OH', at, ring: 'OH'}];
export const SceneHydration: React.FC = () => {
	const f = useCurrentFrame();
	const dimCat = dimAt(f, K2.one, 0.35);
	const L = eqLay(hydL(0), hydR(0), HY.size, HY.len, HY.cx);
	const m = smooth(prog(f, K2.one - 16, 30));
	const gx = [L.lc[0] + (L.rc[0] - L.lc[0]) * m, L.lc[2] + (L.rc[0] - L.lc[2]) * m];
	const gasO = vis(f, K2.two);
	return (
		<Overlay>
			<TaskLine text="Route 1: hydration" at={K2.start} size={54} y={130} />
			<CondCard x={1300} y={190} rows={CARD_ROWS.map((t, i) => ({t, fill: i === 3 ? K2.add + 10 : undefined, o: i === 3 ? 1 : 0.55}))} at={K2.add} out={K2.rem} o={dimAt(f, K2.es + 40, 0.35)} size={20} />
			<Tag x={1300} y={392} text="from the addition video" at={K2.add + 10} out={K2.rem} size={22} />
			<EqRow left={hydL(K2.es)} right={hydR(K2.made)} cx={HY.cx} y={HY.y} size={HY.size} len={HY.len} arrow={{at: K2.es + 14, eqAt: K2.eq, above: [{t: 'H_3PO_4 catalyst', at: K2.phos, o: dimCat}, {t: 'about 300 °C', at: K2.three, o: dimCat}], below: [{t: '60 to 70 atm', at: K2.sixty, fill: '#fbeec4'}]}} />
			{[L.lc[0], L.lc[2], L.rc[0]].map((x, i) => <Sx key={i} x={x} y={i === 2 ? 640 : 640} text="(g)" size={28} color={GREY} anchor="middle" weight={600} at={K2.eq + 20 + i * 4} opacity={i === 2 ? 1 : 1} />)}
			<Tag x={260} y={300} text="⇌: reversible (Module 5)" at={K2.eq + 10} out={K2.two} size={28} color={NAVY} fill="#e7edf8" />
			{gasO > 0.01 ? (
				<g opacity={gasO}>
					{m < 0.98 ? gx.map((x, i) => <circle key={i} cx={x} cy={700} r={15} fill="#9fc3dd" stroke="#4f86ad" strokeWidth={3} />) : <circle cx={L.rc[0]} cy={700} r={15 * (1 + 0.3 * pulseAt(f, K2.one + 14, 20))} fill="#9fc3dd" stroke="#4f86ad" strokeWidth={3} />}
				</g>
			) : null}
			<Tag x={HY.cx} y={760} text="2 gas → 1 gas: high pressure favours ethanol" at={K2.one + 16} size={30} color={TEAL} fill="#dff2ef" anchor="middle" />
			<Tag x={HY.cx} y={830} text="from the addition video" at={K2.one + 30} size={22} o={0.75} />
			{void K2.high}{void K2.half}{void K2.push}
		</Overlay>
	);
};

// ---------- 3. The catalyst and the temperature ----------
const K3 = cues(sc('catalyst-temperature'), {two: 'Two more', cat: 'The catalyst', both: 'both directions', sooner: 'comes sooner', move: "doesn't move", comp: 'compromise.', fwd: 'forward reaction', lower: 'lower temperature', slowly: 'slowly.'});
const Balance: React.FC<{at: number; lower: number; settle: number}> = ({at, lower, settle}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	const P: V2 = [960, 900], R = 330;
	const keys: [number, number][] = [[at, 0], [at + 30, -9], [lower + 10, -14], [settle, 7], [settle + 30, 0]];
	let a = 0;
	for (let i = 1; i < keys.length; i++) { const t = smooth(prog(f, keys[i][0], 26)); a += (keys[i][1] - a) * t; }
	a += f < settle ? Math.sin(f * 0.12) * 1.5 : 0;
	const r = (a * Math.PI) / 180;
	const e1: V2 = [P[0] - Math.cos(r) * R, P[1] - 20 - Math.sin(r) * R], e2: V2 = [P[0] + Math.cos(r) * R, P[1] - 20 + Math.sin(r) * R];
	const nd: V2 = [P[0] + Math.sin(r) * 120, P[1] - 20 - Math.cos(r) * 120];
	const labO = dimAt(f, settle + 30, 0.4);
	return (
		<g opacity={v}>
			<path d={`M${P[0] - 32},${P[1] + 34} L${P[0]},${P[1] - 20} L${P[0] + 32},${P[1] + 34} Z`} fill="#e9e3d6" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
			<path d={`M${P[0] - 120},${P[1] - 20} A120,120 0 0 1 ${P[0] + 120},${P[1] - 20}`} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 8" />
			<line x1={P[0]} y1={P[1] - 150} x2={P[0]} y2={P[1] - 130} stroke={AMBER_R} strokeWidth={5} />
			<line x1={e1[0]} y1={e1[1]} x2={e2[0]} y2={e2[1]} stroke={INK} strokeWidth={7} strokeLinecap="round" />
			<line x1={P[0]} y1={P[1] - 20} x2={nd[0]} y2={nd[1]} stroke={RED} strokeWidth={5} strokeLinecap="round" />
			<circle cx={P[0]} cy={P[1] - 20} r={8} fill={INK} />
			{[e1, e2].map((e, i) => <path key={i} d={`M${e[0] - 70},${e[1] + 34} L${e[0] + 70},${e[1] + 34} M${e[0]},${e[1]} L${e[0] - 60},${e[1] + 34} M${e[0]},${e[1]} L${e[0] + 60},${e[1] + 34}`} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeLinecap="round" />)}
			<g opacity={labO}>
				<Sx x={e1[0]} y={e1[1] + 80} text="lower temperature: more ethanol" size={26} color={INK} anchor="middle" weight={700} at={at + 10} />
				<Sx x={e2[0]} y={e2[1] + 80} text="higher temperature: faster" size={26} color={INK} anchor="middle" weight={700} at={at + 24} />
			</g>
			<Sx x={P[0]} y={P[1] - 160} text="about 300 °C" size={30} color={AMBER_R} anchor="middle" weight={800} at={settle} />
		</g>
	);
};
export const SceneCatalyst: React.FC = () => {
	const f = useCurrentFrame();
	const L = eqLay(hydL(0), hydR(0), HY.size, HY.len, HY.cx);
	const mx = (L.a1 + L.a2) / 2, cy = HY.y - 40 - 51;
	const both = vis(f, K3.both, K3.both + 70) * (0.6 + 0.4 * Math.sin((f - K3.both) * 0.25));
	const tO = dimAt(f, K3.comp, 0.35);
	return (
		<Overlay>
			<TaskLine text="Route 1: hydration" at={-100} size={54} y={130} />
			<circle cx={mx} cy={cy} r={(78 + 10 * pulseAt(f, K3.cat, 30) + 10 * pulseAt(f, K3.both, 30))} fill="#f6d77a" opacity={0.45 * vis(f, K3.cat - 4, K3.comp + 20)} />
			<EqRow left={hydL(-100)} right={hydR(-100)} cx={HY.cx} y={HY.y} size={HY.size} len={HY.len} arrow={{at: -100, eqAt: -100, above: [{t: 'H_3PO_4 catalyst', at: -100}, {t: 'about 300 °C', at: -100, o: 0.35 + 0.65 * prog(f, K3.comp, 12)}], below: [{t: '60 to 70 atm', at: -100, o: 0.35}]}} />
			{[L.lc[0], L.lc[2], L.rc[0]].map((x, i) => <Sx key={i} x={x} y={640} text="(g)" size={28} color={GREY} anchor="middle" weight={600} at={-100} />)}
			<Tag x={HY.cx} y={700} text="2 gas → 1 gas: high pressure favours ethanol" at={-100} out={K3.two + 30} size={26} color={TEAL} fill="#dff2ef" anchor="middle" o={0.4} />
			{both > 0.01 ? (
				<g opacity={both} stroke="#7a5bb5" strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round">
					<path d={`M${mx - 60},${HY.y - 30} l120,0 m-16,-11 l16,11 l-16,11`} />
					<path d={`M${mx + 60},${HY.y + 30} l-120,0 m16,-11 l-16,11 l16,11`} />
				</g>
			) : null}
			<Tag x={HY.cx} y={290} text="catalyst: faster both ways, same position" at={K3.both + 20} size={30} color={NAVY} fill="#e7edf8" anchor="middle" o={0.6 + 0.4 * (1 - prog(f, K3.comp, 12)) + 0.4 * prog(f, K3.slowly + 30, 12)} />
			<g opacity={tO}><Tag x={1380} y={380} text="same equilibrium position" at={K3.move} out={K3.comp} size={24} /></g>
			<Balance at={K3.comp} lower={K3.lower} settle={K3.slowly} />
			<Tag x={1520} y={650} text="higher temperature, higher yield?" at={K3.fwd} out={K3.lower + 40} size={24} o={0.65} anchor="middle" />
			<Tag x={1110} y={700} text="rate against yield" at={K3.slowly + 12} size={28} color={AMBER_R} fill="#fbeec4" />
			{void K3.sooner}
		</Overlay>
	);
};

// ---------- 4. Recycle and separate ----------
const K4 = cues(sc('recycle-and-separate'), {even: 'Even so', few: 'few percent', pass: 'each pass', cooled: 'cooled.', cond: 'Ethanol and water condense', stays: 'ethene stays', back: 'back', again: 'again and again', dist: 'distillation.', plant: 'The plant', fast: 'fast and continuous', crude: 'crude oil'});
const P1: V2[] = [[200, 470], [360, 470], [660, 470], [820, 470], [1060, 470], [1220, 470], [1360, 470]];
const P2: V2[] = [[1360, 470], [1450, 470], [1450, 320], [510, 320], [510, 420]];
const plen = (p: V2[]) => p.slice(1).reduce((s, q, i) => s + Math.hypot(q[0] - p[i][0], q[1] - p[i][1]), 0);
const along = (p: V2[], d: number): V2 => {
	for (let i = 1; i < p.length; i++) {
		const L = Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1]);
		if (d <= L) return [p[i - 1][0] + ((p[i][0] - p[i - 1][0]) * d) / L, p[i - 1][1] + ((p[i][1] - p[i - 1][1]) * d) / L];
		d -= L;
	}
	return p[p.length - 1];
};
const L1 = plen(P1), L2 = plen(P2), V = 6;
const Stream: React.FC<{at: number; cooled: number; back: number}> = ({at, cooled, back}) => {
	const f = useCurrentFrame();
	const out: React.ReactNode[] = [];
	for (let i = 0; at + i * 10 <= f; i++) {
		const birth = at + i * 10, d = (f - birth) * V, eth = i % 7 === 3;
		const arrive = birth + L1 / V;
		let p: V2, o = 1, ring = false;
		if (d <= L1) { p = along(P1, d); ring = eth && p[0] > 560; o = Math.min(1, d / 30); }
		else if (eth) {
			if (arrive < cooled) continue;
			const t = (f - arrive) / 20;
			if (t > 1.4) continue;
			p = [1360 + ((i * 37) % 80) - 40, 470 + 120 * Math.min(1, t)]; ring = true; o = t > 1 ? 1 - (t - 1) / 0.4 : 1;
		} else {
			if (arrive < back) { const t = (f - arrive) / 10; if (t > 1) continue; p = along(P1, L1); o = 1 - t; }
			else { const d2 = d - L1; if (d2 > L2) continue; p = along(P2, d2); o = d2 > L2 - 30 ? (L2 - d2) / 30 : 1; }
		}
		out.push(<g key={i} opacity={o}><circle cx={p[0]} cy={p[1]} r={10} fill={ring ? '#f5ddd3' : '#c9c3b8'} stroke={ring ? RED : '#8a847a'} strokeWidth={ring ? 4 : 2} /></g>);
	}
	return <>{out}</>;
};
const BoxL: React.FC<{x: number; y: number; w: number; h: number; t: string; at: number; dx?: number}> = ({x, y, w, h, t, at, dx = 0}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	return <g opacity={v}><rect x={x} y={y} width={w} height={h} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={3.5} /><Sx x={x + w / 2 + dx} y={y + 42} text={t} size={32} color={INK} anchor="middle" hand weight={700} at={-1000} /></g>;
};
export const SceneRecycle: React.FC = () => {
	const f = useCurrentFrame();
	const tagO = dimAt(f, K4.crude, 0.35);
	const chipO = dimAt(f, K4.back, 0.35);
	const pool = 66 * smooth(prog(f, K4.cooled + 40, 300));
	const passN = f < K4.back + 60 ? 1 : f < K4.back + 120 ? 2 : 3;
	return (
		<Overlay>
			<TaskLine text="Route 1: hydration" at={-100} size={54} y={130} />
			<EqRow left={hydL(-100)} right={hydR(-100)} cx={1180} y={200} size={30} len={150} arrow={{at: -100, eqAt: -100}} o={0.6} />
			<BoxL x={360} y={380} w={300} h={180} t="reactor" at={0} />
			<g opacity={chipO}>
				<Sx x={510} y={516} text="H_3PO_4, 300 °C" size={24} color={NAVY} anchor="middle" weight={700} at={6} />
				<Sx x={510} y={546} text="60 to 70 atm" size={24} color={NAVY} anchor="middle" weight={700} at={6} />
			</g>
			<BoxL x={820} y={380} w={240} h={180} t="cooler" at={8} />
			<g opacity={chipO}><Sx x={940} y={536} text="cooled" size={24} color={NAVY} anchor="middle" weight={700} at={K4.cooled} /></g>
			<BoxL x={1220} y={360} w={280} h={260} t="separator" at={16} dx={-30} />
			{pool > 0.5 ? <rect x={1226} y={614 - pool} width={268} height={pool} rx={8} fill="#cfe3f0" opacity={0.9} /> : null}
			<Arrow2 a={[200, 470]} b={[352, 470]} at={10} color={INK_SOFT} />
			<Arrow2 a={[668, 470]} b={[812, 470]} at={14} color={INK_SOFT} />
			<Arrow2 a={[1068, 470]} b={[1212, 470]} at={18} color={INK_SOFT} />
			<Sx x={110} y={445} text="ethene + steam" size={22} color={GREY} weight={600} at={10} />
			<g opacity={vis(f, K4.back)}>
				<path d="M1450,360 L1450,320 L510,320 L510,372" fill="none" stroke={TEAL} strokeWidth={5} strokeDasharray="14 9" strokeDashoffset={-f * 1.2} />
				<path d="M496,358 L510,376 L524,358" fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
			</g>
			<Stream at={K4.even} cooled={K4.cooled} back={K4.back} />
			<g opacity={tagO}>
				<Tag x={510} y={590} text="a few percent per pass" at={K4.few} size={26} color={RED} fill="#f9e1dc" anchor="middle" o={chipO} />
				<Tag x={1360} y={640} text="ethanol + water condense" at={K4.cond} size={26} color="#2d6f9e" fill="#e3f0fa" anchor="middle" />
				<Tag x={940} y={590} text="unreacted ethene recycled" at={K4.back + 10} size={26} color={TEAL} fill="#dff2ef" anchor="middle" />
				<Sx x={480} y={300} text={`pass ${passN}`} size={30} color={TEAL} anchor="end" weight={800} at={K4.back + 20} />
			</g>
			<Plate p={DISTIL} cx={1720} top={390} h={170} at={K4.dist} o={dimAt(f, K4.plant + 10, 0.25)} />
			<Sx x={1720} y={600} text="distil: ethanol from water" size={24} color={INK} anchor="middle" weight={700} at={K4.dist + 6} opacity={dimAt(f, K4.plant + 10, 0.25)} />
			<Tag x={960} y={760} text="runs nonstop: fast, continuous" at={K4.fast} size={28} color={NAVY} fill="#e7edf8" anchor="middle" o={dimAt(f, K4.crude + 20, 0.6)} />
			<Plate p={BARREL} cx={200} top={700} h={220} at={K4.crude} />
			<Arrow2 a={[200, 690]} b={[200, 500]} at={K4.crude + 14} color={INK_SOFT} />
			<Tag x={300} y={790} text="non-renewable feedstock" at={K4.crude + 10} size={30} color={RED} fill="#f9e1dc" />
			<Tag x={300} y={850} text="feedstock: what you start from" at={K4.crude + 24} size={24} />
			{void K4.pass}{void K4.stays}{void K4.again}
		</Overlay>
	);
};

// ---------- 5. Substitution: the swap, then why ----------
const K5 = cues(sc('substitution-swap'), {r2: 'Route two', heat: 'Heat bromoethane', aq: 'aqueous sodium', mean: 'meaning', swap: 'swapped', oh: 'an O H', giving: 'giving ethanol', nabr: 'sodium bromide.', why: "Here's why.", pulls: 'Bromine pulls', slight: 'slightly positive', hyd: 'negative hydroxide', bonds: 'bonds to that', leaves: 'bromine leaves', bromide: 'bromide ion.', subst: "It's a substitution", alkane: 'alkane video', out: 'pushed out.'});
const ETP = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'OH*'}]);
export const SubStrip: React.FC<{T: {heat: number; aq: number; mean: number; swap: number; nabr: number; out?: number}; Y?: number}> = ({T, Y = 480}) => {
	const f = useCurrentFrame();
	const PX = 1250, NX = 580;
	const nOH: V2 = [NX + 110, Y], nH: V2 = [NX + 150, Y];
	const brSlot = apt(ETP, ETP.k['1r'], PX, Y, 1);
	return (
		<g>
			<Mol2D m={BRE} x={300} y={Y} s={1} at={T.heat} />
			<Plus x={520} y={Y} at={T.aq - 6} />
			<CT x={NX} y={Y + 16} text="NaOH(aq)" size={46} at={T.aq} />
			<RxArrow x1={830} x2={1040} y={Y} at={T.aq + 10} above={[{t: 'heat under reflux', at: T.heat + 10, o: 0.45}]} />
			<Mol2D m={ETP} x={PX} y={Y} s={1} at={T.swap - 24} fly={{[ETP.k['1r']]: {from: loc(nOH, PX, Y, 1), at: T.swap + 14, dur: 26}, [ETP.k['1rH']]: {from: loc(nH, PX, Y, 1), at: T.swap + 18, dur: 26}}} />
			<FreeAtom el="Br" keys={[{at: -1, p: [brSlot[0] + 6, brSlot[1]]}, {at: T.swap, p: [brSlot[0] + 40, brSlot[1] - 100]}, {at: T.nabr - 16, p: [1655, Y], dur: 26}]} at={T.swap - 24} out={T.nabr + 12} />
			<Plus x={1530} y={Y} at={T.nabr - 10} />
			<CT x={1580} y={Y + 16} text="NaBr" size={46} at={T.nabr + 6} />
			<rect x={1564} y={Y - 44} width={150} height={82} rx={14} fill="none" stroke={BOXC} strokeWidth={3} opacity={vis(f, T.nabr + 6)} />
			<Tag x={680} y={Y + 70} text="aqueous = dissolved in water" at={T.mean} size={24} anchor="middle" />
			<Tag x={1640} y={Y + 70} text="Na⁺ just stays in solution" at={T.nabr + 16} out={T.out} size={22} anchor="middle" />
		</g>
	);
};
export const SceneSubstitution: React.FC = () => {
	const f = useCurrentFrame();
	const C: V2 = [800, 650], B0: V2 = [1040, 650];
	const brx = B0[0] + 260 * smooth(prog(f, K5.leaves, 40));
	const pair = 875 + 50 * smooth(prog(f, K5.pulls + 10, 30)) + (brx - B0[0]);
	const ohx = f < K5.bonds ? 360 + 230 * smooth(prog(f, K5.hyd + 10, 70)) : 590 + 90 * smooth(prog(f, K5.bonds, 24));
	const big = vis(f, K5.why + 10);
	const bondO = 1 - prog(f, K5.leaves + 10, 10);
	const newBond = prog(f, K5.bonds + 18, 8);
	return (
		<Overlay>
			<TaskLine text="Route 2: substitution" at={K5.r2} size={54} y={130} />
			<Place keys={[{at: -1, x: 0, y: 0, s: 1}, {at: K5.why, x: 480, y: -20, s: 0.5, o: 0.6}]} dur={26}>
				<SubStrip T={{heat: K5.heat, aq: K5.aq, mean: K5.mean, swap: K5.swap, nabr: K5.nabr, out: K5.why}} />
			</Place>
			{big > 0.01 ? (
				<g opacity={big}>
					<line x1={C[0]} y1={C[1] - 38} x2={C[0]} y2={C[1] - 92} stroke={INK} strokeWidth={5} />
					<line x1={C[0]} y1={C[1] + 30} x2={C[0]} y2={C[1] + 84} stroke={INK} strokeWidth={5} />
					<Sx x={C[0]} y={C[1] - 104} text="CH_3" size={52} color={INK} anchor="middle" weight={800} at={-1000} />
					<Sx x={C[0]} y={C[1] + 132} text="H" size={50} color="#9a948a" anchor="middle" weight={700} at={-1000} />
					<Sx x={C[0]} y={C[1] + 22} text="C" size={64} color={INK} anchor="middle" weight={800} at={-1000} />
					<line x1={C[0] + 40} y1={C[1]} x2={brx - 50} y2={C[1]} stroke={INK} strokeWidth={5} opacity={bondO} />
					<Sx x={brx} y={C[1] + 22} text={f >= K5.leaves + 20 ? 'Br⁻' : 'Br'} size={64} color={BROM} anchor="middle" weight={800} at={-1000} />
					{[0, 1].map(k => <circle key={k} cx={pair} cy={C[1] + (k ? 10 : -10)} r={7} fill={NAVY} opacity={vis(f, K5.pulls)} />)}
					<Sx x={C[0] + 46} y={C[1] - 50} text="δ+" size={40} color={NAVY} anchor="middle" weight={800} at={K5.slight} />
					<Sx x={brx} y={C[1] - 56} text="δ−" size={40} color={NAVY} anchor="middle" weight={800} at={K5.slight + 14} out={K5.leaves + 10} />
					<g opacity={vis(f, K5.hyd)}>
						<Sx x={ohx - 64} y={C[1] + 20} text="H" size={50} color="#9a948a" anchor="middle" weight={700} at={-1000} />
						<line x1={ohx - 44} y1={C[1]} x2={ohx - 24} y2={C[1]} stroke={INK} strokeWidth={4} />
						<Sx x={ohx} y={C[1] + 22} text="O" size={60} color={RED} anchor="middle" weight={800} at={-1000} />
						<Sx x={ohx + 28} y={C[1] - 28} text="−" size={44} color={RED} anchor="middle" weight={800} at={-1000} opacity={1 - prog(f, K5.bonds + 14, 10)} />
						<line x1={ohx + 32} y1={C[1]} x2={C[0] - 40} y2={C[1]} stroke={INK} strokeWidth={5} opacity={newBond} />
					</g>
					<Tag x={560} y={810} text="δ+ carbon attracts OH⁻" at={K5.hyd + 16} size={30} color={RED} fill="#f9e1dc" anchor="middle" />
					<Tag x={1380} y={760} text="Br⁻ leaves" at={K5.bromide} size={26} color={BROM} fill="#f6e2d3" anchor="middle" o={dimAt(f, K5.subst, 0.5)} />
				</g>
			) : null}
			<Tag x={1820} y={800} text="also called nucleophilic substitution" at={K5.subst} size={22} anchor="end" />
			<g opacity={vis(f, K5.alkane + 6)}>
				<rect x={160} y={880} width={520} height={110} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
				<CT x={420} y={928} text="CH_3CH_3 → CH_3CH_2Br" size={30} anchor="middle" />
				<Sx x={420} y={972} text="alkane video: H out" size={24} color={GREY} anchor="middle" weight={700} at={-1000} />
			</g>
			<g opacity={vis(f, K5.out)}>
				<rect x={720} y={880} width={520} height={110} rx={16} fill="#fffdf8" stroke={RED} strokeWidth={2.5} />
				<CT x={980} y={928} text="CH_3CH_2Br → CH_3CH_2OH" size={30} anchor="middle" />
				<Sx x={980} y={972} text="now: Br out" size={24} color={RED} anchor="middle" weight={700} at={-1000} />
			</g>
			<Tag x={1840} y={1010} text="in ethanol instead: tends to give an alkene (later video)" at={K5.out + 26} size={20} anchor="end" o={dimAt(f, K5.out + 60, 0.55)} />
			{void K5.oh}{void K5.giving}
		</Overlay>
	);
};

// ---------- 6. Why reflux, and where the OH lands ----------
const K6 = cues(sc('reflux-same-carbon'), {why: 'Why heat', reflux: 'reflux?', heating: 'Heating speeds', bromo: 'bromoethane boils', s78: 'seventy eight,', escape: 'escape', cond: 'upright condenser', back: 'drip back', after: 'Afterwards,', dist: 'distilled', oh: 'And the O H', two: 'two-bromopropane', prop: 'propan-two-ol.', part: 'particular alcohol'});
const BRP = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'Br', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
const PROP = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'OH*', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
export const RF = {cx: 420, top: 260, h: 640};
export const SceneReflux: React.FC = () => {
	const f = useCurrentFrame();
	const pd = dimAt(f, K6.oh, 0.35);
	const cnd = ptOn(REFLUX, RF.cx, RF.top, RF.h, 1012, 560), liq = ptOn(REFLUX, RF.cx, RF.top, RF.h, 1000, 1286), cb = ptOn(REFLUX, RF.cx, RF.top, RF.h, 1012, 880);
	const S = 0.62, RX = 1010, PX = 1650, Y = 560;
	const br = apt(BRP, BRP.k['1u'], RX, Y, S), oh = apt(PROP, PROP.k['1u'], PX, Y, S), ohH = apt(PROP, PROP.k['1uH'], PX, Y, S);
	return (
		<Overlay>
			<EqRow left={[{t: 'CH_3CH_2Br', at: -100}, {t: '+', at: -100}, {t: 'NaOH(aq)', at: -100}]} right={[{t: 'CH_3CH_2OH', at: -100}, {t: '+', at: -100}, {t: 'NaBr', at: -100, box: -100}]} cx={1180} y={190} size={30} len={190} arrow={{at: -100, above: [{t: 'heat under reflux', at: K6.why, fill: '#fbeec4'}]}} o={0.8} />
			<Plate p={REFLUX} cx={RF.cx} top={RF.top} h={RF.h} at={-100} o={pd} />
			<Reflux base={[liq[0], liq[1] - 6]} top={[cb[0], cb[1] - 160]} at={K6.escape} until={K6.back + 90} o={pd} />
			<Leader a={[640, 382]} b={[cnd[0] + 18, cnd[1]]} at={K6.reflux} o={0.4 + 0.6 * pd + 0.25 * (1 - pd)} />
			<Tag x={640} y={358} text="reflux: vapours drip back" at={K6.reflux} size={28} color={NAVY} fill="#e7edf8" o={0.85 + 0.15 * pd} />
			<g opacity={dimAt(f, K6.oh, 0.25)}>
				<Tag x={640} y={620} text="heat: faster reaction" at={K6.heating} size={26} />
				<Tag x={640} y={680} text="bromoethane boils at 38 °C" at={K6.bromo} size={26} color={BROM} fill="#f6e2d3" />
				<Tag x={640} y={740} text="ethanol boils at 78 °C" at={K6.s78} size={26} color={RED} fill="#f9e1dc" />
			</g>
			<Tag x={640} y={820} text="then distil the alcohol out" at={K6.dist} out={K6.dist + 70} size={24} />
			<Mol2D m={BRP} x={RX} y={Y} s={S} at={K6.two} />
			<RingAt c={br} rx={34} ry={30} at={K6.prop} color={AMBER_R} />
			<RxArrow x1={1180} x2={1380} y={Y} at={K6.two + 10} above={[{t: 'NaOH(aq), reflux', at: K6.two + 14}]} />
			<Mol2D m={PROP} x={PX} y={Y} s={S} at={K6.prop - 10} />
			<RingAt c={[(oh[0] + ohH[0]) / 2, oh[1]]} rx={48} ry={30} at={K6.prop + 8} color={AMBER_R} />
			<Tag x={1330} y={690} text="OH takes the halogen's place" at={K6.prop + 14} size={30} color={AMBER_R} fill="#fbeec4" anchor="middle" />
			<NameBuilder x={1000} y={790} s={0.62} at={K6.two + 20} fills={[{slot: 1, text: 'propan', at: K6.prop}, {slot: 2, text: '-2-ol', at: K6.prop + 6}]} />
			<Tag x={1000} y={950} text="secondary, as the haloalkane was (C05)" at={K6.part} size={22} />
			{void K6.cond}{void K6.after}
		</Overlay>
	);
};
