// M7 P01 scenes 1 to 5: the hook (three identical bottles, the claim from C03 needs evidence), choosing the members
// (straight chains of one series; branched, gases and pentane crossed), choosing a safe property (heating crossed;
// evaporation: only the fastest molecules escape, so the liquid cools), the method (the soaked sleeve, the tube rises
// and lowers on a coded path, the readout falls, the fume cupboard behind) and the variables card linked to the set-up.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, PenLink, Sx, TRead, TaskLine, VCard} from '../chem-m6-p02/parts';
import {BallStick, Crossed, Tag, TickMark, alkane3d} from '../chem-m7-c01/molecules';
import {PlateC, dimAt, lerp, vis} from '../chem-m7-c04a/parts';
import {BURNER, sc} from './common';
import {Bottle, ENERGY, GREENC, HAZ, INK, INK_SOFT, RUN, SU, SetUp, SkelSmall, TEAL, Wisps, fall} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {here: 'Here are', hep: 'heptane,', oct: 'octane', non: 'nonane.', identical: 'identical.', last: 'The last video', claim: "That's a", test: 'test it', trust: 'trust'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const xs = [620, 960, 1300];
	const at = [K1.hep, K1.oct, K1.non];
	return (
		<Overlay>
			{xs.map((x, i) => (
				<g key={i}>
					<Bottle cx={x} top={360} h={500} i={i} labelAt={at[i]} o={vis(f, K1.here + i * 6)} dimLabel={K1.test} />
					<g opacity={dimAt(f, K1.identical, 0.35)}><SkelSmall n={7 + i} x={x - (6 + i) * 11} y={310} dx={22} dy={14} at={at[i] + 4} width={4} /></g>
				</g>
			))}
			<Tag x={96} y={190} text="last video: longer chain → stronger dispersion forces" at={K1.last} size={28} />
			<Sx x={96 + 790} y={232} text="?" size={60} color={HAZ} hand at={K1.test} />
			<TaskLine text="Claim → evidence?" at={K1.test} size={64} y={140} />
			{void K1.claim}{void K1.trust}{void INK}
		</Overlay>
	);
};

// ---------- 2. Choosing the members ----------
const K2 = cues(sc('choose-members'), {first: 'First, choose', straight: 'straight chains', only: 'only thing', ch2: 'one C H', branched: 'A branched', shape: 'shape', hep: 'Heptane, octane', liquids: 'liquids', methane: 'Methane to', gases: 'gases,', pentane: 'pentane boils', thirty: 'thirty six', risk: 'fire risk'});
const LAD = {x: 130, y: [330, 470, 610]};
export const SceneMembers: React.FC = () => {
	const f = useCurrentFrame();
	const gas = vis(f, K2.gases) * dimAt(f, K2.pentane, 0.35);
	return (
		<Overlay>
			<TaskLine text="Choose the members" at={0} size={52} y={130} />
			{[0, 1, 2].map(i => (
				<g key={i}>
					<SkelSmall n={7 + i} x={LAD.x} y={LAD.y[i]} dx={52} dy={30} at={K2.first + 10 + i * 10} />
					<Sx x={LAD.x + (6 + i) * 52 + 40} y={LAD.y[i] + 10} text={['heptane', 'octane', 'nonane'][i]} size={30} color={RUN[i]} weight={800} at={K2.hep + i * 8} />
					{i > 0 ? <Tag x={LAD.x - 20} y={LAD.y[i] - 82} text="+CH_2" at={K2.ch2 + i * 6} size={22} color="#2d6f9e" fill="#e3f0fa" /> : null}
					<Bottle cx={830} top={LAD.y[i] - 60} h={120} i={i} labelAt={1e6} o={vis(f, K2.liquids + i * 4)} />
				</g>
			))}
			<Tag x={LAD.x} y={680} text="one change: chain length" at={K2.straight} size={30} color={GREENC} fill="#e3f3e9" o={dimAt(f, K2.liquids, 0.5)} />
			<TickMark x={LAD.x + 400} y={700} at={K2.only} o={dimAt(f, K2.liquids, 0.5)} />
			<Tag x={760} y={720} text="liquids at 25 °C" at={K2.liquids + 10} size={26} anchor="middle" />
			<g opacity={dimAt(f, K2.liquids, 0.6)}>
				<SkelSmall n={6} br={1} x={1180} y={330} dx={52} dy={30} at={K2.branched} color={INK_SOFT} />
				<Sx x={1310} y={420} text="2-methylhexane" size={26} color={INK_SOFT} anchor="middle" weight={700} at={K2.branched} />
				<Crossed x={1170} y={450} text="shape changes too" at={K2.branched + 6} cross={K2.shape} size={30} />
			</g>
			<g opacity={gas}>
				<Sx x={130} y={860} text="CH_4   C_2H_6   C_3H_8   C_4H_10" size={34} color={INK_SOFT} weight={700} at={K2.methane} />
				<PlateC p={BURNER} cx={700} top={790} h={120} />
				<Tag x={130} y={890} text="gases at 25 °C" at={K2.gases} size={26} />
			</g>
			<Crossed x={1000} y={800} text="pentane: boils at 36 °C; extremely flammable" at={K2.pentane} cross={K2.thirty} note="vapour builds up fastest: biggest fire risk" size={30} />
			{void K2.risk}{void TEAL}
		</Overlay>
	);
};

// ---------- 3. Choosing a safe property ----------
const K3 = cues(sc('choose-test'), {next: 'Next, choose', boiling: 'Boiling point', heating: 'heating a', flame: 'flame', ignite: 'ignite', measure: 'So measure', evap: 'evaporates.', only: 'Only the', escape: 'escape,', left: 'left behind', slower: 'slower', cools: 'cools.', faster: 'The faster', drop: 'temperature drop'});
const HEP = alkane3d(7);
const MOLS: {x: number; y: number; amp: number; sp: number}[] = [
	{x: 980, y: 760, amp: 4, sp: 0.21}, {x: 1150, y: 690, amp: 7, sp: 0.29}, {x: 1320, y: 760, amp: 5, sp: 0.25}, {x: 1490, y: 690, amp: 16, sp: 0.42},
	{x: 1660, y: 760, amp: 6, sp: 0.27}, {x: 1060, y: 840, amp: 5, sp: 0.23}, {x: 1400, y: 850, amp: 8, sp: 0.31}, {x: 1600, y: 850, amp: 4, sp: 0.2},
];
export const SceneTest: React.FC = () => {
	const f = useCurrentFrame();
	const esc = smooth01(prog(f, K3.escape, 40));
	const calm = 1 - 0.55 * prog(f, K3.cools, 30);
	const L = vis(f, K3.boiling) * dimAt(f, K3.measure, 0.35);
	return (
		<Overlay>
			<TaskLine text="Choose a property you can test safely" at={0} size={52} y={130} />
			<g opacity={L}>
				<rect x={270} y={300} width={70} height={230} rx={30} fill="#e8f1f8" stroke={INK} strokeWidth={4} />
				<rect x={276} y={430} width={58} height={94} rx={26} fill="#cfe2f0" />
				<path d="M305,640 C270,600 285,570 305,545 C325,570 340,600 305,640 Z" fill="#f3c27a" stroke={HAZ} strokeWidth={3} opacity={0.8} />
				<Wisps x={305} y={300} at={K3.heating} n={3} lean={-0.4} dots={false} />
				{(() => { const fl = vis(f, K3.flame, K3.flame + 40, 8); return fl > 0.01 ? <circle cx={300} cy={555} r={50 * fl} fill={HAZ} opacity={0.5 * fl} /> : null; })()}
				<Crossed x={140} y={700} text="heating a flammable liquid" at={K3.flame} cross={K3.ignite} size={32} />
			</g>
			<g opacity={vis(f, K3.evap)}>
				<rect x={900} y={640} width={860} height={280} rx={16} fill="#e3eef6" opacity={0.75} />
				<line x1={900} x2={1760} y1={640} y2={640} stroke="#7fa9c8" strokeWidth={4} />
				{MOLS.map((m, i) => {
					const isFast = i === 3;
					const a = m.amp * (isFast ? 1 : calm);
					const dx = Math.sin(f * m.sp + i) * a, dy = Math.cos(f * m.sp * 1.3 + i * 2) * a * 0.6;
					const lift = isFast ? esc * 230 : 0;
					return (
						<g key={i}>
							<BallStick atoms={HEP.atoms} bonds={HEP.bonds} orders={HEP.orders} cx={m.x + dx + (isFast ? esc * 60 : 0)} cy={m.y + dy - lift} unitPx={22} yaw={0.3 + i * 0.4} pitch={0.4} />
							{isFast && esc > 0.05 ? <circle cx={m.x + dx + esc * 60 + 70} cy={m.y + dy - lift - 30} r={10} fill={ENERGY} /> : null}
						</g>
					);
				})}
			</g>
			<Tag x={1330} y={300} text="evaporate: escape from the surface, below the boiling point" at={K3.evap} out={K3.cools} size={24} anchor="middle" />
			<Tag x={1330} y={300} text="fastest escape → the rest are slower → cooler" at={K3.cools} size={28} color={TEAL} fill="#dff2ef" anchor="middle" />
			<TRead x={1690} y={580} text={fall(21.8, 21.4, K3.cools, K3.cools + 60)} at={K3.left} sample="21.8 °C" />
			<Sx x={900} y={1000} text="faster evaporation → bigger temperature drop" size={36} color={INK_SOFT} hand at={K3.faster} />
			{void K3.next}{void K3.only}{void K3.slower}{void K3.drop}
		</Overlay>
	);
};
const smooth01 = (t: number) => t * t * (3 - 2 * t);

// ---------- 4. Method ----------
const K4 = cues(sc('method'), {wrap: 'Wrap a', probe: 'probe.', dip: 'Dip it', thirty: 'thirty seconds', soaks: 'soaks up', lift: 'Then lift', out: 'out,', log: 'log the', falling: 'falling.', start: 'The start', delta: 'delta T', fume: 'fume cupboard', three: 'three times'});
export const SceneMethod: React.FC = () => {
	const f = useCurrentFrame();
	const timer = Math.round(30 * Math.max(0, Math.min(1, (f - K4.thirty) / 40)));
	return (
		<Overlay>
			<SetUp at={0} hood={K4.fume} hoodO={0.35} tube={{inAt: K4.dip - 10, upAt: K4.dip + 6, downAt: K4.out, outAt: K4.out + 26}} read={fall(21.8, 18.1, K4.out + 10, K4.falling + 60)} readAt={K4.probe} wisps={{at: K4.out + 10}} />
			<Tag x={SU.tipX + 60} y={SU.sleeveY - 40} text="filter-paper sleeve" at={K4.wrap + 30} out={K4.dip} size={24} />
			<g opacity={vis(f, K4.thirty, K4.out)}>
				<rect x={SU.tipX + 140} y={SU.tipY - 10} width={120} height={50} rx={12} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />
				<Sx x={SU.tipX + 200} y={SU.tipY + 26} text={`${timer} s`} size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
			<Tag x={1250} y={420} text="soak: paper reaches the sample's temperature" at={K4.soaks} out={K4.falling} size={26} />
			<VCard x={1250} y={480} w={600} h={210} title="Temperature drop" titleAt={K4.falling} lines={[{t: 'ΔT = start − lowest', at: K4.start, size: 40, weight: 800}]} at={K4.falling} />
			<Tag x={SU.hoodX + 760} y={150} text="fume cupboard: draws vapour away" at={K4.fume + 10} size={26} />
			<Tag x={1250} y={720} text="× 3 trials each" at={K4.three} size={32} color={TEAL} fill="#dff2ef" />
			{void K4.lift}{void K4.log}{void K4.delta}
		</Overlay>
	);
};

// ---------- 5. Variables ----------
const K5 = cues(sc('variables'), {vars: 'variables?', ind: 'The independent', carbons: 'carbons:', dep: 'The dependent', drop: 'temperature drop.', every: 'everything else', paper: 'size of', soak: 'soaking time', start: 'starting temperature', place: "probe's place", air: 'moving air'});
export const SceneVariables: React.FC = () => {
	const f = useCurrentFrame();
	const lean = smooth01(prog(f, K5.air, 20));
	return (
		<Overlay>
			<SetUp at={-100} hood={-100} hoodO={0.35} read={() => '21.8 °C'} readAt={-100} wisps={{at: 0, n: 4, lean}} />
			<VCard x={1240} y={170} w={630} h={420} title="Variables" titleAt={K5.vars} at={K5.vars} dim={K5.air} lines={[
				{t: 'Independent: number of carbons (7, 8, 9)', at: K5.carbons, size: 27},
				{t: 'Dependent: ΔT (°C)', at: K5.drop, size: 27},
				{t: 'Controlled:', at: K5.every, size: 27, weight: 800},
				{t: '· paper sleeve size', at: K5.paper, size: 27},
				{t: '· soak time 30 s', at: K5.soak, size: 27},
				{t: '· start temperature 21.8 °C', at: K5.start, size: 27},
				{t: '· same position, same sash height', at: K5.place, size: 27},
			]} />
			{[0, 1, 2].map(i => <circle key={i} cx={1500 + i * 30} cy={214} r={9} fill={RUN[i]} opacity={vis(f, K5.carbons + 10)} />)}
			<PenLink a={[1250, 408]} b={[SU.tipX + 22, SU.sleeveY + 20]} at={K5.paper} out={K5.soak + 20} />
			<PenLink a={[1250, 454]} b={[SU.tipX + 22, SU.tipY]} at={K5.soak} out={K5.start + 20} />
			<PenLink a={[1250, 500]} b={[SU.cable[0] + 60, SU.cable[1] - 100]} at={K5.start} out={K5.place + 20} />
			<PenLink a={[1250, 546]} b={[SU.hoodX + 0.86 * SU.hoodW, 420]} at={K5.place} out={K5.air + 30} />
			<g opacity={vis(f, K5.air)}>
				{[0, 1, 2].map(k => { const ph = ((f - K5.air) * 2 + k * 60) % 180; return <path key={k} d={`M${SU.tipX - 260 + ph * 2},${SU.sleeveY - 40 + k * 40} l60,0 m-14,-10 l14,10 l-14,10`} fill="none" stroke="#8fbfe3" strokeWidth={5} strokeLinecap="round" opacity={Math.sin((ph / 180) * Math.PI)} />; })}
			</g>
			<Tag x={1240} y={620} text="air flow speeds evaporation" at={K5.air} size={32} color={TEAL} fill="#dff2ef" />
			{void K5.ind}{void K5.dep}{void lerp}{void TRead}
		</Overlay>
	);
};
