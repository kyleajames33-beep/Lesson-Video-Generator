// M7 C12 scenes 1 to 5: the hook (oil separates; with soap the tube stays cloudy), why oil and water separate (the
// lattice keeps its hydrogen bonds), soap's two ends (sodium stearate: tail and head), saponification (a triglyceride
// split by OH⁻; glycerol + 3 soap; NaOH used up; completion) and soap at the surface and in micelles.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, ProtonHop, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {Brace, Crossed, DISP, Dots, Tag, Trace, VIOLET} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {SkelAt} from '../chem-m7-c02/parts';
import {CT, dimAt, vis} from '../chem-m7-c04a/parts';
import {HBond, WaterMol, waterGrid} from '../chem-m7-c03/parts';
import {EqRow, Plate, RingAt, ptOn} from '../chem-m7-c06/parts';
import {P2} from '../chem-m7-c08a/parts';
import {Charge, Drop, acidK} from '../chem-m7-c09/parts';
import {Heading, OIL_BOTTLE, OW, SOAP, SOAPMAKE, sc} from './common';
import {INK, INK_SOFT, Ion, Micelle, NA, NAVY, OIL, OilChain, RED, SoapSym, TAIL, WATER_SOFT} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {pour: 'Pour cooking', shake: 'shake it hard', floats: 'floats back', layer: 'layer', add: 'Add a few', soap: 'soap,', again: 'shake it again', cloudy: 'cloudy,', stays: 'stays cloudy', so: 'So how'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const cx = 960, top = 220, h = 660;
	const rock = (a: number, b: number) => (f >= a && f <= b ? Math.sin((f - a) * 0.6) * 7 * Math.sin(((f - a) / (b - a)) * Math.PI) : 0);
	const ang = rock(K1.shake, K1.shake + 70) + rock(K1.again, K1.again + 60);
	const base = ptOn(OW.layers, cx, top, h, 1000, 1700);
	const oil = ptOn(OW.layers, cx, top, h, 1000, 740), wat = ptOn(OW.layers, cx, top, h, 1000, 1150);
	const lo = ptOn(OW.layers, cx, top, h, 900, 900), hi = ptOn(OW.layers, cx, top, h, 1100, 1400);
	const drops = Array.from({length: 9}, (_, i) => {
		const t0 = K1.shake + 20, t = (f - t0) / 90;
		if (t < 0 || t > 1) return null;
		const u = (i * 0.618) % 1, v = ((i * 0.37) % 1);
		const y = hi[1] - (hi[1] - lo[1]) * v - t * t * (hi[1] - oil[1]) * (1 - v);
		return <circle key={i} cx={lo[0] + (hi[0] - lo[0]) * u} cy={Math.max(oil[1], y)} r={9} fill={OIL} opacity={Math.sin(t * Math.PI)} />;
	});
	return (
		<>
			<Heading text="Soaps and detergents: lifting oil into water" at={4} size={56} />
			<Overlay>
				<g opacity={vis(f, 0, K1.so) * dimAt(f, K1.shake, 0.4)}><Plate p={OIL_BOTTLE} cx={300} top={380} h={380} /></g>
				<Tag x={300} y={790} text="cooking oil" at={K1.pour} out={K1.so} size={24} anchor="middle" />
				<g transform={`rotate(${ang},${base[0]},${base[1]})`}>
					<Plate p={OW.layers} to={OW.emulsion} swap={K1.cloudy - 10} swapDur={30} cx={cx} top={top} h={h} at={0} />
					{drops}
				</g>
				<Tag x={oil[0] + 120} y={oil[1] - 20} text="oil" at={K1.pour + 20} out={K1.add} size={26} color="#a8761a" fill="#fbedd0" />
				<Tag x={wat[0] + 120} y={wat[1] - 20} text="water" at={K1.pour + 30} out={K1.add} size={26} color="#4f86ad" fill="#dcebf6" />
				<Tag x={cx + 160} y={500} text="separates again" at={K1.layer} out={K1.add + 20} size={28} />
				<Drop x={cx} y={oil[1] - 40} at={K1.soap - 20} color="#d8e6f0" />
				<Drop x={cx + 10} y={oil[1] - 40} at={K1.soap - 6} color="#d8e6f0" />
				<Tag x={cx + 160} y={420} text="+ soap" at={K1.soap} out={K1.stays} size={28} color={RED} fill="#f9e1dc" />
				<Tag x={cx + 160} y={560} text="stays cloudy much longer" at={K1.stays} size={30} color={NAVY} fill="#e7edf8" />
				<Sx x={960} y={960} text="How can one substance hold on to oil and water?" size={40} color={INK} anchor="middle" hand at={K1.so} />
			</Overlay>
		</>
	);
};

// ---------- 2. Why they separate ----------
const K2 = cues(sc('why-separate'), {first: 'First, why', hexane: 'hexane', oil: 'Oil molecules', nonpolar: 'non-polar', forces: 'forces', letting: 'Letting them', break: 'break', keeps: 'keeps its', out: 'out.'});
const G = waterGrid(520, 470, 8, 4, 125);
export const SceneSeparate: React.FC = () => {
	const f = useCurrentFrame();
	const push = smooth(prog(f, K2.break - 10, 24)) * (1 - smooth(prog(f, K2.keeps, 24)));
	const gather = smooth(prog(f, K2.out - 10, 24));
	const snapK = new Set([3, 4]);
	return (
		<Overlay>
			<TaskLine text="Why separate?" at={K2.first} size={54} y={130} />
			<Tag x={96} y={190} text="c03: hexane forms a layer on water" at={K2.hexane} out={K2.oil + 30} size={24} />
			{G.pairs.map(([a, b], k) => {
				const snap = snapK.has(k) ? push : 0;
				return <HBond key={k} a={G.w[a].o} b={G.w[b].o} at={6 + k} o={1 - 0.85 * snap} flash={snapK.has(k) ? K2.break : undefined} />;
			})}
			{G.w.map((w, i) => <WaterMol key={i} p={w} o={prog(f, i, 10)} />)}
			<g transform={`translate(0,${push * 170 - gather * 60})`}>
				<OilChain x={640} y={330} at={K2.oil} />
				<Dots a={[640, 330]} b={[1036, 330]} at={K2.nonpolar} color={DISP} width={4} flicker />
			</g>
			<g transform={`translate(0,${-gather * 60})`}>
				<OilChain x={1100} y={330} at={K2.forces - 10} />
				<OilChain x={1120} y={290} at={K2.out - 6} o={gather} />
				<OilChain x={620} y={290} at={K2.out - 6} o={gather} />
			</g>
			<g opacity={gather}><rect x={500} y={200} width={1000} height={110} rx={30} fill="#f6e3a4" opacity={0.45} /></g>
			<Tag x={96} y={330} text="mostly non-polar: mainly dispersion" at={K2.nonpolar} out={K2.letting} size={26} color="#2d6f9e" fill="#e3f0fa" />
			<Crossed x={96} y={400} text="oil–water hydrogen bonds" at={K2.forces} cross={K2.forces + 20} out={K2.keeps} size={28} />
			<Tag x={96} y={900} text="lost hydrogen bonds" at={K2.break + 10} out={K2.keeps} size={26} color={RED} fill="#f9e1dc" />
			<Tag x={96} y={900} text="water keeps its hydrogen bonds, squeezes the oil out" at={K2.keeps + 10} size={28} color={VIOLET} fill="#e6ddf5" />
		</Overlay>
	);
};

// ---------- 3. Soap's two ends ----------
const K3 = cues(sc('soap-structure'), {soap: 'Soap fixes', take: 'Take sodium', salt: "It's the sodium", octa: 'octadecanoate', stearic: 'Stearic acid', but: 'But in the salt', ion: 'charged ion', tail: 'the tail', nonpolar: 'non-polar', hydro: 'hydrophobic', head: 'the head', attracts: 'attracts polar', ion2: 'ion-dipole', philic: 'hydrophilic'});
const STE = acidK(18, [], 62, 36);
const STM = {...STE.m, labels: [{i: STE.o, text: 'O'}, {i: STE.oh as number, text: 'O⁻'}]};
export const SceneTwoEnds: React.FC = () => {
	const f = useCurrentFrame();
	const X = 860, Y = 560, S = 1;
	const ch = Array.from({length: 17}, (_, i) => P2(STE.m, X, Y, S, i));
	const c = P2(STE.m, X, Y, S, STE.c), o2 = P2(STE.m, X, Y, S, STE.oh as number);
	const na = [o2[0] + 90 - 200 * smooth(prog(f, K3.ion, 30)), o2[1] + 40 + 170 * smooth(prog(f, K3.ion, 30))] as V2;
	const tailO = dimAt(f, K3.head, 0.35);
	const W = [{o: [c[0] + 150, c[1] - 120] as V2, a: 3.3}, {o: [c[0] + 190, c[1] + 60] as V2, a: 2.6}, {o: [c[0] + 120, c[1] + 170] as V2, a: -1.9}];
	return (
		<Overlay>
			<TaskLine text="Soap: two ends" at={K3.soap} size={54} y={130} />
			<g opacity={dimAt(f, K3.take + 20, 0.3) * vis(f, 0, K3.tail)}><Plate p={SOAP} cx={200} top={250} h={150} /></g>
			<Tag x={200} y={420} text="soap" at={6} out={K3.take} size={24} anchor="middle" />
			<CT x={960} y={290} text="sodium stearate, C_17H_35COO⁻ Na⁺" size={40} anchor="middle" at={K3.take} />
			<Tag x={96} y={360} text="C09: '-oate' salts; stearate = octadecanoate (C18)" at={K3.octa} out={K3.stearic} size={22} />
			<Tag x={96} y={360} text="C09: long acids barely mix with water" at={K3.stearic + 10} out={K3.but} size={22} />
			<g opacity={tailO}>
				<Trace path={ch} at={K3.tail} dur={40} width={24} />
			</g>
			<SkelAt m={STM} x={X} y={Y} s={S} at={K3.take} />
			<Ion x={na[0]} y={na[1]} t="Na⁺" color={NA} r={30} o={vis(f, K3.take + 20)} />
			<Tag x={na[0] - 60} y={na[1] + 40} text="Na⁺ dissolves separately" at={K3.ion} out={K3.tail} size={22} />
			<Charge p={[(o2[0] + c[0]) / 2 + 20, (o2[1] + c[1]) / 2]} at={K3.ion} r={60} />
			<g opacity={tailO}>
				<Brace x1={ch[0][0]} x2={ch[16][0]} y={Y + 60} text="tail: C₁₇H₃₅, non-polar" at={K3.tail + 10} color="#2d6f9e" size={30} />
				<OilChain x={ch[2][0]} y={Y - 140} n={12} at={K3.nonpolar} />
				<Dots a={[ch[4][0], Y - 120]} b={[ch[4][0], Y - 40]} at={K3.nonpolar + 10} color={TAIL} width={4} flicker />
				<Dots a={[ch[9][0], Y - 120]} b={[ch[9][0], Y - 40]} at={K3.nonpolar + 16} color={TAIL} width={4} flicker />
				<Tag x={ch[0][0]} y={Y + 150} text="hydrophobic: water-avoiding (dispersion with oil)" at={K3.hydro} size={26} color="#2d6f9e" fill="#e3f0fa" />
			</g>
			<RingAt c={[c[0] + 40, c[1]]} rx={90} ry={90} at={K3.head} />
			<g opacity={vis(f, K3.attracts)}>
				{W.map((w, i) => <WaterMol key={i} p={w} />)}
				{W.map((w, i) => <Dots key={'d' + i} a={w.o} b={[c[0] + 40, c[1]]} at={K3.attracts + i * 6} color={NAVY} width={3} />)}
			</g>
			<Tag x={1260} y={760} text="head: COO⁻, ionic" at={K3.head} size={28} color={RED} fill="#f9e1dc" />
			<Tag x={1260} y={830} text="ion–dipole: hydrophilic, water-loving" at={K3.ion2} size={28} color={NAVY} fill="#e7edf8" />
			<Sx x={X} y={980} text="both ends in one particle: amphiphilic (amphipathic)" size={22} color={INK_SOFT} anchor="middle" weight={600} at={K3.take + 30} />
			<g opacity={vis(f, K3.philic)}><SoapSym x={1720} y={400} ang={Math.PI} s={1.3} /><Sx x={1660} y={470} text="head and tail" size={22} color={INK_SOFT} anchor="middle" weight={700} at={-1000} /></g>
			{void K3.salt}
		</Overlay>
	);
};

// ---------- 4. Saponification ----------
const K4 = cues(sc('saponification'), {where: 'Where does', fats: 'Fats and oils', glyc: 'is glycerol', ester: 'ester links', heat: 'Heat a fat', break: 'break all', get: 'You get', sapon: 'saponification', used: 'used up', reactant: 'reactant', basic: 'strongly basic', proton: "acid's proton", cant: "can't re-form", comp: 'completion'});
export const SceneSapon: React.FC = () => {
	const f = useCurrentFrame();
	const GX = 360, GY = [330, 470, 610];
	const brk = smooth(prog(f, K4.break + 10, 40));
	const crossO = vis(f, 0, K4.basic + 30);
	return (
		<Overlay>
			<TaskLine text="Make it: saponification" at={K4.where} size={54} y={130} />
			<g opacity={vis(f, K4.fats, K4.glyc + 20) * 0.9}><Plate p={OIL_BOTTLE} cx={150} top={300} h={300} /></g>
			<Tag x={96} y={190} text="fats and oils: triglycerides" at={K4.fats} out={K4.heat} size={24} />
			{GY.map((y, i) => {
				const dx = brk * 330;
				return (
					<g key={i}>
						<Sx x={GX} y={y + 14} text={i === 1 ? 'CH' : 'CH₂'} size={36} color={INK} anchor="middle" weight={800} at={K4.glyc} />
						<line x1={GX + 46} y1={y} x2={GX + 96} y2={y} stroke={INK} strokeWidth={4} opacity={prog(f, K4.glyc + 6, 10)} />
						<Sx x={GX + 118} y={y + 14} text="O" size={36} color={RED} anchor="middle" weight={800} at={K4.glyc + 6} />
						<Sx x={GX + 146} y={y + 14} text="H" size={32} color="#9a948a" anchor="middle" weight={800} at={K4.break + 40} />
						<g transform={`translate(${dx},0)`} opacity={prog(f, K4.glyc + 10, 10)}>
							<line x1={GX + 142} y1={y} x2={GX + 196} y2={y} stroke={RED} strokeWidth={4} opacity={1 - brk} />
							<Sx x={GX + 214} y={y + 14} text="C" size={36} color={INK} anchor="middle" weight={800} at={-1000} />
							<line x1={GX + 206} y1={y - 22} x2={GX + 206} y2={y - 56} stroke={RED} strokeWidth={4} /><line x1={GX + 222} y1={y - 22} x2={GX + 222} y2={y - 56} stroke={RED} strokeWidth={4} />
							<Sx x={GX + 214} y={y - 64} text="O" size={30} color={RED} anchor="middle" weight={800} at={-1000} />
							<polyline points={Array.from({length: 7}, (_, k) => `${GX + 236 + k * 34},${y + (k % 2 ? -10 : 10)}`).join(' ')} fill="none" stroke={TAIL} strokeWidth={5} />
							<Sx x={GX + 470} y={y + 10} text="C₁₇H₃₅" size={24} color="#2d6f9e" weight={700} at={-1000} />
							<g opacity={brk}><Sx x={GX + 176} y={y + 12} text="⁻O" size={30} color={RED} anchor="middle" weight={800} at={-1000} /><Ion x={GX + 640} y={y} t="Na⁺" color={NA} r={22} /></g>
						</g>
						<RingAt c={[GX + 170, y]} rx={46} ry={30} at={K4.ester + i * 6} out={K4.break} />
						<g opacity={vis(f, K4.break - 20, K4.break + 30)}><Ion x={GX + 170 + (1 - smooth(prog(f, K4.break - 20, 30))) * 160} y={y + 60 - (1 - smooth(prog(f, K4.break - 20, 30))) * 40} t="OH⁻" color="#7a5bb5" r={26} /></g>
					</g>
				);
			})}
			<Tag x={96} y={700} text="glycerol: propane-1,2,3-triol" at={K4.get} out={K4.sapon + 20} size={26} />
			<EqRow left={[{t: 'C_3H_5(OOCC_17H_35)_3', at: K4.sapon}, {t: '+', at: K4.sapon}, {t: '3NaOH', at: K4.sapon, ring: '3', ringAt: K4.used}]} right={[{t: 'C_3H_5(OH)_3', at: K4.sapon + 10}, {t: '+', at: K4.sapon + 10}, {t: '3C_17H_35COONa', at: K4.sapon + 10}]} cx={900} y={780} size={34} len={110} arrow={{at: K4.sapon + 6}} />
			<Tag x={900} y={820} text="fat + sodium hydroxide → glycerol + soap" at={K4.sapon + 20} out={K4.used} size={24} anchor="middle" />
			<g opacity={vis(f, K4.sapon) * dimAt(f, K4.basic, 0.5)}><Plate p={SOAPMAKE} cx={1600} top={190} h={240} /></g>
			<Tag x={1600} y={450} text="conc. NaOH: corrosive, eye protection" at={K4.sapon + 40} out={K4.used} size={22} color={NAVY} fill="#e7edf8" anchor="middle" />
			<g opacity={crossO}><Crossed x={96} y={880} text="NaOH is a catalyst" at={K4.used} cross={K4.reactant} note="used up: a reactant, 3 per fat" size={30} /></g>
			<ProtonHop a={[GX + 500, GY[0] - 30]} b={[GX + 700, GY[0] - 120]} at={K4.proton - 10} dur={26} />
			<Tag x={1180} y={560} text="base takes the acid's H⁺: carboxylate" at={K4.proton} out={K4.cant} size={24} color="#5e4a8c" fill="#e4ddf0" />
			<Tag x={900} y={880} text="carboxylate can't re-form the ester: goes to completion" at={K4.cant} size={28} color={TEAL} fill="#dff2ef" anchor="middle" />
			<Tag x={900} y={950} text="c10: esterification is ⇌" at={K4.comp - 20} size={22} anchor="middle" />
		</Overlay>
	);
};

// ---------- 5. Surface and micelles ----------
const K5 = cues(sc('surface-micelles'), {now: 'Now put', heads: 'The heads stay', tails: 'the tails get', surface: 'surface', add: 'Add enough', micelles: 'micelles', tuck: 'tuck', face: 'face out'});
export const SceneMicelle: React.FC = () => {
	const f = useCurrentFrame();
	const SY = 380;
	const rowO = dimAt(f, K5.tuck, 0.35);
	return (
		<Overlay>
			<TaskLine text="Clean it: soap in water" at={K5.now} size={54} y={130} />
			<rect x={96} y={SY} width={1728} height={620} rx={20} fill={WATER_SOFT} opacity={prog(f, 0, 12)} />
			<line x1={96} y1={SY} x2={1824} y2={SY} stroke="#7fa9c8" strokeWidth={4} opacity={prog(f, 0, 12)} />
			<Sx x={1810} y={SY + 50} text="water" size={26} color="#4f86ad" anchor="end" weight={700} at={0} />
			<g opacity={rowO}>
				{Array.from({length: 9}, (_, i) => {
					const t = smooth(prog(f, K5.heads + i * 5, 26));
					const x = 260 + i * 170;
					return <SoapSym key={i} x={x} y={SY + 20 + (1 - t) * 260} ang={-Math.PI / 2 - (1 - t) * 1.2} s={1.1} o={prog(f, K5.heads + i * 5, 8)} />;
				})}
			</g>
			<Tag x={1300} y={240} text="tails out of the water: soap gathers at the surface" at={K5.surface} out={K5.tuck + 20} size={26} />
			<Micelle cx={960} cy={720} r={150} n={16} at={K5.micelles - 30} build={[K5.micelles - 30, K5.micelles + 30]} />
			<Tag x={1180} y={620} text="micelle: tails in, heads out" at={K5.tuck} size={30} color={RED} fill="#f9e1dc" />
			<Tag x={1180} y={690} text="heads in water, tails hidden" at={K5.face} size={26} color={NAVY} fill="#e7edf8" />
			{void K5.tails}{void K5.add}{void INK_SOFT}
		</Overlay>
	);
};
