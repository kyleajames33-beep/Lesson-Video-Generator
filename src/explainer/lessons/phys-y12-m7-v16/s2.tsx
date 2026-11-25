// Scenes 7 to 11: the annihilation numbers (working beside the event), combustion (the painted fuel can and red-disc
// oxygen molecules inside one system boundary), one rule at three scales (a log-scale chart; electrons rearranging in a
// coded molecule against nucleons regrouping), why chemistry never noticed (the painted top-pan balance with a coded
// display that never changes, the painted flame) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {MemoryCard} from '../../shared/scenes';
import {Disc, LPlate, SUN, plateH} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {Packet} from '../../physics/light/photo';
import {FLAME, FUEL_CAN, LogBars, Nucleus, Particle, SystemBox, logX} from '../../physics/light/massenergy';
import {balancePts} from '../../physics/electromagnetism/bench';
import {C2, DM_PETROL, E_PAIR, E_PETROL, E_PHOTON, E_PHOTON_EV, FRACTIONS, FRACTION_COMB, FUSION_F, HEAD, HEAD_SIZE, O2_KG, SYS_KG, cap, cue} from './common';
import {AMBER, BAL, GREY, Givens, INK, Lbl, MASS, Molecules, NAVY, NEUTRON, Outflow, ROSE, fx, sci} from './parts';

// ---------- 7. annihilation: the numbers ----------
export const S07: React.FC = () => {
	const id = 'worked-annihilation';
	const f = useCurrentFrame();
	const j = cue(id, 'joules'), me = cue(id, 'being one MeV'), cv = cap(id, cue(id, 'converted'));
	const fly = 0.6 + 0.4 * Math.sin(f / 20) ** 2;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SystemBox x={1270} y={210} w={554} h={640} bar={360} out={360 * prog(f, cv, 30)} barW={60} mass={MASS} />
				<Particle x={1420} y={420} r={40} color={NAVY.stroke} text="e⁻" size={32} opacity={0.35} />
				<Particle x={1560} y={420} r={40} color={ROSE.stroke} text="e⁺" size={32} opacity={0.35} />
				<Packet x={1490 - 160 * fly} y={600} deg={180} len={90} color={AMBER.stroke} label="γ" size={32} />
				<Packet x={1490 + 160 * fly} y={600} deg={0} len={90} color={AMBER.stroke} label="γ" size={32} />
			</FrameSvg>
			<Lbl x={1280} y={190} at={0} color={INK} size={28}>electron + positron, at rest</Lbl>
			<Lbl x={1700} y={880} at={0} color={MASS.ink} size={28} anchor="middle">rest mass</Lbl>
			<Givens x={96} y={168} w={1150} at={4} size={30} lines={['mₑ = 9.109 × 10⁻³¹ kg (each); c = 3.00 × 10⁸ m s⁻¹', '1 eV = 1.602 × 10⁻¹⁹ J (data sheet); pair at rest']} />
			<div style={{position: 'absolute', left: 96, top: 320, display: 'flex', flexDirection: 'column', gap: 16, width: 1150}}>
				<Row at={0} size={34}><span style={{color: MASS.ink}}>{'rest energy of the pair: E = (2mₑ)c²'}</span></Row>
				<Row at={j - 10} ageAt={me} size={40}>{`E = (2 × 9.109 × 10⁻³¹)(3.00 × 10⁸)² = ${sci(E_PAIR, 2)} J`}</Row>
				<Row at={me - 40} size={34}>{`each photon: ${sci(E_PHOTON, 2)} J = (${sci(E_PHOTON, 2)}) / (1.602 × 10⁻¹⁹)`}</Row>
				<Row at={me - 6} size={52}><AnswerBox at={me}>{`= ${sci(E_PHOTON_EV, 1)} eV ≈ ${fx(E_PHOTON_EV / 1e6, 2)} MeV`}</AnswerBox></Row>
			</div>
			<Chip x={96} y={600} at={me + 10} size={32} color={INK}>1 MeV = 10⁶ eV</Chip>
			<CrossedChip x={420} y={600} at={me + 24} crossAt={me + 40} size={30} caption="two photons share it">{`each photon ${sci(E_PAIR, 2)} J`}</CrossedChip>
			<HandTag x={96} y={820} text="all the rest energy leaves: 100%" at={cv} size={36} color={MASS.ink} />
		</>
	);
};

// ---------- 8. combustion ----------
const CAN: Place = {x: 160, y: 300, w: 280};
const O2 = [[560, 360], [640, 450], [540, 520], [660, 590], [560, 660], [650, 300]] as const;
export const OxygenCluster: React.FC<{opacity?: number}> = ({opacity = 1}) => (
	<g opacity={opacity}>{O2.map(([x, y], i) => <g key={i}><circle cx={x - 16} cy={y} r={18} fill="#c8443a" stroke={INK} strokeWidth={2.5} /><circle cx={x + 16} cy={y} r={18} fill="#c8443a" stroke={INK} strokeWidth={2.5} /></g>)}</g>
);
export const S08: React.FC = () => {
	const id = 'worked-combustion';
	const f = useCurrentFrame();
	const sa = cue(id, 'the same accounting applies'), sys = cue(id, 'The system is the petrol and the oxygen'), kg = cue(id, 'minus ten kilograms'), bn = cap(id, cue(id, 'billion'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SystemBox x={110} y={240} w={680} h={520} bar={300} out={6 * prog(f, kg, 20)} barW={50} mass={MASS} />
				<LPlate spec={FUEL_CAN} p={CAN} />
				<OxygenCluster opacity={prog(f, sys, 14)} />
			</FrameSvg>
			<Lbl x={CAN.x + CAN.w / 2} y={CAN.y + plateH(FUEL_CAN, CAN.w) + 40} at={0} color={INK} size={28} anchor="middle">petrol</Lbl>
			<Lbl x={600} y={740} at={sys} color={'#b8322a'} size={28} anchor="middle">oxygen (O₂)</Lbl>
			<Lbl x={110} y={800} at={sys + 6} color={INK} size={30}>{`system: 1.0 kg petrol + ${fx(O2_KG, 1)} kg oxygen = ${fx(SYS_KG, 1)} kg`}</Lbl>
			<Givens x={880} y={168} w={940} at={4} size={30} lines={[`E = 44 MJ = ${sci(E_PETROL, 1)} J (per kg of petrol, site value)`]} />
			<Chip x={880} y={260} at={sa} size={32} color={INK}>Δm = E/c² (every process)</Chip>
			<div style={{position: 'absolute', left: 880, top: 360, display: 'flex', flexDirection: 'column', gap: 16, width: 940}}>
				<Row at={kg - 30} size={34}><AnswerBox at={kg}>{`Δm = (${sci(E_PETROL, 1)}) / (${sci(C2, 1)}) = ${sci(DM_PETROL, 1)} kg ≈ ${fx(DM_PETROL * 1e9, 2)} μg`}</AnswerBox></Row>
				<Row at={bn - 6} size={34}><AnswerBox at={bn}>{`fraction = (${sci(DM_PETROL, 1)}) / ${fx(SYS_KG, 1)} ≈ ${sci(FRACTION_COMB, 0)} (1 part in 10¹⁰)`}</AnswerBox></Row>
			</div>
			<CrossedChip x={880} y={620} at={bn + 10} crossAt={bn + 20} size={28} caption="count the oxygen too">{`fraction = ${sci(DM_PETROL, 1)} / 1.0 (petrol only)`}</CrossedChip>
		</>
	);
};

// ---------- 9. one rule, three scales ----------
const LX0 = 360, LX1 = 1640, LLO = -11, LHI = 0;
export const S09: React.FC = () => {
	const id = 'three-scales';
	const f = useCurrentFrame();
	const cb = cue(id, 'Combustion, about one ten billionth'), fu = cue(id, 'Fusion, about zero point seven per cent'), an = cue(id, 'Annihilation, all of it'), re = cue(id, 'rearrange electrons'), rn = cue(id, 'rearrange the particles in the nucleus'), sc = cap(id, cue(id, 'scale'));
	const bars = [
		{value: FRACTIONS.combustion, label: 'combustion', color: GREY.stroke, grow: prog(f, cb, 20)},
		{value: FRACTIONS.fusion, label: 'fusion (Sun)', color: AMBER.stroke, grow: prog(f, fu, 20)},
		{value: FRACTIONS.annihilation, label: 'annihilation', color: ROSE.stroke, grow: prog(f, an, 20)},
	];
	const end = (v: number) => logX(LX0, LX1, LLO, LHI, v);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LogBars x0={LX0} x1={LX1} y={240} gap={90} h={56} lo={LLO} hi={LHI} bars={bars} ticks={[-10, -5, 0]} tickLabel={e => (e === 0 ? '1' : `10${e === -10 ? '⁻¹⁰' : '⁻⁵'}`)} size={30} title="fraction of reacting mass converted (log scale)" />
				<LPlate spec={FUEL_CAN} p={{x: end(FRACTIONS.combustion) + 14, y: 236, w: 50}} opacity={prog(f, cb + 16, 10)} />
				<Disc spec={SUN} cx={end(FRACTIONS.fusion) + 44} cy={358} d={64} opacity={prog(f, fu + 16, 10)} />
				<g opacity={prog(f, an + 16, 10)}><rect x={end(1) + 12} y={424} width={96} height={64} rx={8} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="8 6" /><Particle x={end(1) + 40} y={456} r={14} color={NAVY.stroke} /><Particle x={end(1) + 80} y={456} r={14} color={ROSE.stroke} /></g>
				<g opacity={prog(f, re, 14)}><Molecules x={150} y={640} s={1} shift={Math.sin(f / 10) ** 2} /></g>
				<g opacity={prog(f, rn, 14)}><Nucleus cx={1300} cy={720} p={6} n={6} r={20} proton={ROSE.stroke} neutron={NEUTRON} mix={(f - rn) / 60} /></g>
			</FrameSvg>
			{bars.map((b, i) => <Lbl key={i} x={LX0 - 16} y={240 + i * 90 + 30} at={[cb, fu, an][i]} color={INK} size={30} anchor="end">{b.label}</Lbl>)}
			<Lbl x={end(FRACTIONS.combustion) + 80} y={270} at={cb + 10} color={GREY.ink} size={30}>{`≈ ${sci(FRACTIONS.combustion, 0)}`}</Lbl>
			<Lbl x={end(FRACTIONS.fusion) + 90} y={360} at={fu + 10} color={AMBER.ink} size={30}>{`≈ ${fx(FUSION_F * 1000)} × 10⁻³`}</Lbl>
			<Lbl x={end(1) - 20} y={500} at={an + 10} color={ROSE.ink} size={30} anchor="end">= 1</Lbl>
			<HandTag x={150} y={860} text="chemical: a few eV per bond" at={re + 10} size={34} color={NAVY.ink} />
			<HandTag x={1100} y={860} text="nuclear: millions of eV" at={rn + 10} size={34} color={ROSE.ink} />
			<HandTag x={680} y={760} text="× about 10⁶ per particle" at={sc} size={36} color={INK} marks={[{kind: 'arrow', from: [580, 720], to: [1160, 720], bend: -0.15}]} />
		</>
	);
};

// ---------- 10. why chemistry never noticed ----------
const BP: Place = {x: 300, y: 420, w: 900};
export const S10: React.FC = () => {
	const id = 'chemistry-conservation';
	const f = useCurrentFrame();
	const dt = cue(id, 'detect'), ms = cap(id, cue(id, 'measure'));
	const g = balancePts(BP);
	const [d0, d1] = g.display;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={BAL} p={BP} />
				<rect x={d0[0]} y={d0[1]} width={d1[0] - d0[0]} height={d1[1] - d0[1]} rx={6} fill="#1f2a24" />
				<text x={(d0[0] + d1[0]) / 2} y={d1[1] - 14} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, fill: '#9df2b4'}}>4.500 000 kg</text>
				<LPlate spec={FLAME} p={{x: (g.panL + g.panR) / 2 - 40, y: g.panY - 160, w: 80}} />
				{f >= ms ? <g opacity={prog(f, ms, 14)}>
					<rect x={1500} y={560} width={80} height={300} rx={6} fill={MASS.soft} stroke={MASS.stroke} strokeWidth={3} />
					<rect x={1620} y={560 + 300 * FUSION_F * 10} width={80} height={300 * (1 - FUSION_F * 10)} rx={6} fill={MASS.soft} stroke={MASS.stroke} strokeWidth={3} />
				</g> : null}
			</FrameSvg>
			<Lbl x={BP.x} y={220} at={0} color={INK} size={32}>closed system: petrol + oxygen burning (idealised)</Lbl>
			<Lbl x={BP.x} y={270} at={0} color={GREY.ink} size={28}>before and after: the same reading</Lbl>
			<HandTag x={BP.x} y={860} text="change: 0.000 000 49 g, below an ordinary lab balance's resolution" at={dt} size={32} color={MASS.ink} marks={[{kind: 'circle', cx: d1[0] - 110, cy: (d0[1] + d1[1]) / 2, rx: 40, ry: 32}]} />
			<Lbl x={1600} y={520} at={ms} color={MASS.ink} size={28} anchor="middle">nuclear: measurable</Lbl>
			<Lbl x={1600} y={900} at={ms + 6} color={GREY.ink} size={26} anchor="middle">(mass spectrometry; gap 10× larger)</Lbl>
		</>
	);
};

// ---------- 11. a way to remember ----------
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const dn = cue(id, 'down'), er = cap(id, cue(id, 'the exchange rate is c squared'));
	const drop = kf(f, [[0, 0], [dn, 30]]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 860, top: 220, width: 960}}>
				<MemoryCard at={dn - 6} main={<><span style={{color: AMBER.ink}}>Energy out,</span> <span style={{color: MASS.ink}}>mass down:</span> <span style={{color: INK}}>Δm = E/c².</span></>} />
			</div>
			<FrameSvg>
				<SystemBox x={120} y={260} w={600} h={500} bar={320} out={drop} barW={80} mass={MASS} />
				<Outflow cx={330} cy={510} r0={60} r1={330} t={f / 30} n={8} />
				<Disc spec={SUN} cx={1000} cy={700} d={160} />
				<LPlate spec={FUEL_CAN} p={{x: 1240, y: 620, w: 140}} />
			</FrameSvg>
			<Chip x={860} y={860} at={er} size={34} color={INK}>c² = 9.0 × 10¹⁶ J kg⁻¹</Chip>
		</>
	);
};
